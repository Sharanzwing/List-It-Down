import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";

env.config();

const app = express();
const port = process.env.PORT || 3000;
const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

app.get("/", (req, res) => {
  const query = "SELECT * FROM items ORDER BY id ASC";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Error fetching items from database:", err);
      res.status(500).send("Internal Server Error");
    } else {
      items = result.rows;
      res.render("index.ejs", {
        listTitle: "Today",
        listItems: items,
      });
    }
  });
});

app.post("/add", (req, res) => {
  const item = req.body.newItem;
  const query = "INSERT INTO items (title) VALUES ($1)";
  db.query(query, [item], (err, result) => {
    if (err) {
      console.error("Error adding item to database:", err);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Item added to database:", item);
      res.redirect("/");
    }
  });
});

app.post("/edit", (req, res) => {
  const itemId = req.body.updatedItemId;
  const newTitle = req.body.updatedItemTitle;
  const query = "UPDATE items SET title = $1 WHERE id = $2";
  db.query(query, [newTitle, itemId], (err, result) => {
    if (err) {
      console.error("Error updating item in database:", err);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Item updated in database:", newTitle);
      res.redirect("/");
    }
  });
});

app.post("/delete", (req, res) => {
  const itemId = req.body.deleteItemId;
  const query = "DELETE FROM items WHERE id = $1";
  db.query(query, [itemId], (err, result) => {
    if (err) {
      console.error("Error deleting item from database:", err);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Item deleted from database:", itemId);
      res.redirect("/");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
