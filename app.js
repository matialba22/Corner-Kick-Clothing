// ************ Require's ************
const express = require("express");
const app = express();

// ************ Template engine ************
app.set("view engine", "ejs");
app.set("views", "./src/views");

// ************ Middlewares **********
app.use(express.static("public"));

// ************ Server ************
app.listen(process.env.PORT || 3030, () => "Server running on port 3030");

// ************ Routes ************
const mainRoutes = require("./src/routes/main");
const productsRoutes = require("./src/routes/products");
const usersRoutes = require("./src/routes/users");

app.use("/", mainRoutes);
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
