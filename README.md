# List It Down 📝

A clean, full-stack persistent To-Do List web application built with **Node.js**, **Express**, **EJS**, and **PostgreSQL**. Tasks are persisted in a relational database, supporting full CRUD (Create, Read, Update, Delete) operations.

---

## ✨ Features

- **Read / View Tasks**: Loads and displays all pending to-do items from PostgreSQL in ascending order.
- **Add Tasks**: Quickly create new tasks and persist them directly into the database.
- **Edit Tasks**: Update existing task titles in-place without leaving the page.
- **Delete Tasks**: Mark tasks as completed using checkboxes to delete them from the database.
- **Environment Security**: Uses `dotenv` to keep sensitive database credentials secure and out of version control.

---

## 🛠️ Tech Stack

- **Backend**: [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) with [`pg`](https://node-postgres.com/) (node-postgres)
- **Templating Engine**: [EJS](https://ejs.co/) (Embedded JavaScript)
- **Configuration**: [dotenv](https://www.npmjs.com/package/dotenv)
- **Styling**: CSS3 & HTML5

---

## 🚀 Getting Started

Follow these steps to run the application locally.

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [PostgreSQL](https://www.postgresql.org/) installed and running locally

---

### 2. Clone the Repository

```bash
git clone https://github.com/your-username/list-it-down.git
cd list-it-down
```

---

### 3. Install Dependencies

```bash
npm install
```

---

### 4. Database Setup

1. Open your PostgreSQL tool (`psql` terminal, pgAdmin, or your preferred SQL client).
2. Create a database named `permalist`:
   ```sql
   CREATE DATABASE permalist;
   ```
3. Connect to the `permalist` database and execute the schema commands from `queries.sql`:
   ```sql
   CREATE TABLE items (
     id SERIAL PRIMARY KEY,
     title VARCHAR(100) NOT NULL
   );

   INSERT INTO items (title) VALUES ('Buy milk'), ('Finish homework');
   ```

---

### 5. Environment Variables Configuration

1. Copy the example environment file to `.env`:
   ```bash
   cp .env.example .env
   ```
   *(On Windows Command Prompt / PowerShell: `copy .env.example .env`)*

2. Open `.env` and fill in your PostgreSQL credentials:
   ```env
   PORT=3000
   DB_USER=postgres
   DB_HOST=localhost
   DB_NAME=permalist
   DB_PASSWORD=your_postgres_password
   DB_PORT=5432
   ```

---

### 6. Run the Application

```bash
npm start
```

Or run with node directly:
```bash
node index.js
```

Open your browser and navigate to:
```
http://localhost:3000
```

---

## 📁 Project Structure

```text
├── public/              # Static assets (CSS styles, icons)
├── views/               # EJS templates (index.ejs, partials)
├── .env.example         # Template for environment variables
├── .gitignore           # Ignored files (node_modules, .env)
├── index.js             # Main server & route definitions
├── package.json         # Project dependencies and scripts
├── queries.sql          # SQL schema and seed data
└── README.md            # Project documentation
```

---

## 📄 License

This project is open-source and available under the [ISC License](LICENSE).
