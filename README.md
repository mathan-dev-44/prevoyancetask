# Task Manager Application

A full-stack Task Management application built with **React**, **Node.js**, **Express.js**, and **PostgreSQL (Neon)**. The application allows users to create, view, update, delete, search, filter, and paginate tasks through a clean and responsive interface.

---

# Features

## Backend

* RESTful CRUD APIs
* Express.js with ES Modules
* Layered Architecture

  * Routes
  * Controllers
  * Services
  * Repositories
* PostgreSQL (Neon Database)
* Request validation using Joi
* Global error handling middleware
* Pagination
* Search tasks by title
* Filter tasks by status
* Filter tasks by priority
* CORS enabled
* Clean folder structure

## Frontend

* React 19
* Functional Components
* React Hooks
* Axios API integration
* Responsive UI with Tailwind CSS
* Create Task
* Update Task
* Delete Task with confirmation
* Search Tasks
* Filter by Status
* Filter by Priority
* Pagination
* Loading indicators
* Empty state
* Client-side form validation
* Responsive task table

---

# Tech Stack

## Frontend

* React
* Vite
* Tailwind CSS
* Axios
* React Icons

## Backend

* Node.js
* Express.js
* PostgreSQL
* Neon Database
* pg
* Joi
* CORS
* dotenv

---

# Project Structure

```text
task-manager
│
├── client
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   │   ├── common
│   │   │   └── task
│   │   ├── hooks
│   │   ├── pages
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middlewares
│   │   ├── repositories
│   │   ├── routes
│   │   ├── services
│   │   ├── validations
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# Database Schema

```sql
CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    status VARCHAR(20) NOT NULL,
    priority VARCHAR(20) NOT NULL,
    due_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# API Endpoints

## Get All Tasks

```http
GET /api/tasks
```

Supports:

| Query Parameter | Description        |
| --------------- | ------------------ |
| page            | Current page       |
| limit           | Records per page   |
| search          | Search by title    |
| status          | Filter by status   |
| priority        | Filter by priority |

Example:

```http
GET /api/tasks?page=1&limit=5&search=react&status=Pending&priority=High
```

---

## Get Single Task

```http
GET /api/tasks/:id
```

---

## Create Task

```http
POST /api/tasks
```

Request Body

```json
{
    "title":"Learn React",
    "description":"Complete Hooks",
    "status":"Pending",
    "priority":"High",
    "due_date":"2026-07-20"
}
```

---

## Update Task

```http
PUT /api/tasks/:id
```

---

## Delete Task

```http
DELETE /api/tasks/:id
```

---

# Validation Rules

* Title is required
* Title length must be between 3 and 150 characters
* Description is required
* Status must be one of:

  * Pending
  * In Progress
  * Completed
* Priority must be one of:

  * Low
  * Medium
  * High
* Due date cannot be in the past

---

# Backend Setup

## Clone Repository

```bash
git clone <repository-url>
```

```bash
cd server
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000

DATABASE_URL=your_neon_connection_string
```

---

## Run Backend

```bash
npm run dev
```

Backend will run at

```text
http://localhost:5000
```

---

# Frontend Setup

Open another terminal.

```bash
cd client
```

Install dependencies.

```bash
npm install
```

Create a `.env` file.

```env
VITE_API_URL=http://localhost:5000/api
```

Run the application.

```bash
npm run dev
```

Frontend runs at

```text
http://localhost:5173
```

---
