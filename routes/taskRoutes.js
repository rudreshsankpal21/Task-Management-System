const express = require("express");
const {
  createTask,
  getAllTasks,
  getTaskById,
} = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");
const taskRoutes = express.Router();

// Create Task
taskRoutes.post("/", authMiddleware, createTask);

// Get all tasks
taskRoutes.get("/", authMiddleware, getAllTasks);

// Get task by id
taskRoutes.get("/:id", authMiddleware, getTaskById);

// Update task

// delete task
// taskRoutes.delete("/:id", deleteTask);

module.exports = taskRoutes;
