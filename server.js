require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Connect to DB
connectDB();

// start server
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
