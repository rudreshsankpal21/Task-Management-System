const express = require("express");
const taskRoutes = express.Router();

// Create Task
taskRoutes.post("/", createTask);

// Get all tasks
// taskRoutes.get("/", getAllTasks);

// // Get task by id
// taskRoutes.get("/:id", getTaskById);

// // Update task
// taskRoutes.put("/:id", updateTask);

// // delete task
// taskRoutes.delete("/:id", deleteTask);

module.exports = taskRoutes;
