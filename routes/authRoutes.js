const express = require("express");
const authRoutes = express.Router();
const {
  registerUser,
  loginUser,
  getUsers,
} = require("../controllers/authController");

authRoutes.post("/register", registerUser);

authRoutes.post("/login", loginUser);

authRoutes.get("/users", getUsers);

module.exports = authRoutes;
