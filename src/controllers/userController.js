const db = require("../database/models");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

const userController = {
  register: (req, res) => {
    res.render("./users/register");
  },

  processRegister: (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("./users/register", {
        errorMsg: errors.mapped(),
        oldData: req.body,
      });
    }

    db.Users.create({
      email: req.body.email,
      phone_number: req.body.phone_number,
      password: bcrypt.hashSync(req.body.password, 10),
    }).then(res.redirect("/users/login"));
  },

  login: (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("./users/login", {
        errorMsg: errors.mapped(),
        oldData: req.body,
      });
    }

    res.render("./users/login");
  },
};

module.exports = userController;
