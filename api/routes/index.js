const express = require("express");
const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const categoryRoutes = require("./category.routes");

const app = express();

app.use(authRoutes);
// app.use("/user", userRoutes);
// app.use("/category", categoryRoutes);

module.exports = app;