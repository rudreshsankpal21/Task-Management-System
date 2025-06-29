const express = require("express");
const { createTask, getAllTasks } = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");
const taskRoutes = express.Router();

// Create Task
taskRoutes.post("/", authMiddleware, createTask);

// Get all tasks
taskRoutes.get("/", authMiddleware, getAllTasks);

// // Get task by id
// taskRoutes.get("/:id", getTaskById);

// // Update task
// taskRoutes.put("/:id", updateTask);

// // delete task
// taskRoutes.delete("/:id", deleteTask);

module.exports = taskRoutes;
