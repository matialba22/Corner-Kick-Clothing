// ************ Require's ************
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const session = require("express-session");
const cookies = require("cookie-parser");
const userLoggedMW = require("./src/middlewares/userLoggedMW");

// ************ Template engine ************
app.set("view engine", "ejs");
app.set("views", "./src/views");

// ************ Middlewares **********
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "This is secret!!",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cookies());
app.use(userLoggedMW);

// ************ Server ************
app.listen(process.env.PORT || 3030, () => "Server running on port 3030");

// ************ Routes ************
const mainRoutes = require("./src/routes/main");
const shopRoutes = require("./src/routes/shop");
const usersRoutes = require("./src/routes/users");

app.use("/", mainRoutes);
app.use("/shop", shopRoutes);
app.use("/users", usersRoutes);
