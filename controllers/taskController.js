const Task = require("../models/Task");
const User = require("../models/User");

// Create task
const createTask = async (req, res) => {
  const { title, description, status, priority } = req.body;
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const task = await Task.create({
      title,
      description,
      status,
      priority,
      user: user._id,
    });
    res.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating task",
      error,
    });
  }
};

// get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    if (!tasks) {
      return res.status(404).json({
        message: "Tasks not found",
      });
    }
    res.status(200).json({
      tasks,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting tasks",
      error,
    });
  }
};

// Get task by id
const getTaskById = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(403).json({
        message: "User not found",
      });
    }

    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }
    res.status(200).json({
      task,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting task",
      error,
    });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
};
