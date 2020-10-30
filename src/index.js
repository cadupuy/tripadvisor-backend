require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const formidable = require("express-formidable");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
app.use(formidable());
app.use(cors());
app.use(helmet());

const userRoutes = require("../routes/user");
app.use(userRoutes);

app.all("*", (req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.listen(process.env.PORT, (req, res) => {
  console.log("Server started");
});
