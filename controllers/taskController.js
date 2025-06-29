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

module.exports = {
  createTask,
};
