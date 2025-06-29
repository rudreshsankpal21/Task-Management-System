# ✅ Task Management System API

A simple and secure **Task Management REST API** built with Node.js, Express, and MongoDB. Users can register, log in, and manage their own tasks with full CRUD operations. All task routes are protected using JWT-based authentication.

---

## 🚀 Features

- 🔐 User Registration & Login (JWT Auth)
- 📝 Create, Read, Update, Delete Tasks
- 🔒 Auth Middleware to protect user-specific tasks
- 📦 Scalable & Clean Folder Structure
- 🧪 Tested with Postman

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- dotenv

---

## 📁 Folder Structure

```

task-manager-api/
├── config/
│ └── db.js # MongoDB connection
│
├── controllers/
│ ├── authController.js # Register/Login handlers
│ └── taskController.js # CRUD for tasks
│
├── middleware/
│ └── authMiddleware.js # JWT protection
│
├── models/
│ ├── User.js # User schema
│ └── Task.js # Task schema
│
├── routes/
│ ├── authRoutes.js # /api/auth
│ └── taskRoutes.js # /api/tasks
│
├── .env # Environment variables
├── server.js # Main entry point
├── package.json
└── README.md

```

---

## 🔐 Authentication Routes

| Method | Endpoint           | Description         |
| ------ | ------------------ | ------------------- |
| POST   | /api/auth/register | Register a new user |
| POST   | /api/auth/login    | Login & get token   |

---

## 📝 Task Routes (Protected)

| Method | Endpoint       | Description          |
| ------ | -------------- | -------------------- |
| POST   | /api/tasks     | Create a new task    |
| GET    | /api/tasks     | Get all user's tasks |
| GET    | /api/tasks/:id | Get task by ID       |
| PUT    | /api/tasks/:id | Update a task        |
| DELETE | /api/tasks/:id | Delete a task        |

All task routes require:

```

Authorization: Bearer \<JWT_TOKEN>

```

---

## 📦 Setup & Run

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/task-manager-api.git
   cd task-manager-api
   ```

````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_secret_key
   ```

4. Start the server:

   ```bash
   npm run dev
   ```

---

## 🧪 How to Test with Postman

1. Register → `/api/auth/register`
2. Login → Copy token from `/api/auth/login`
3. Use `Bearer <token>` in header for all `/api/tasks` routes
4. Test Create, Read, Update, and Delete operations

---

## 👨‍💻 Author

Built with ❤️ by Rudresh

---
````
