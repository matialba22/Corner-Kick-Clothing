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
        errors: errors.mapped(),
        oldData: req.body,
      });

    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    db.Users.create({
      email: req.body.email,
      username: req.body.username,
      phone_number: req.body.phone_number,
      password: hash,
    })
    .then(() => res.redirect("/users/login"));
  },

  login: (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render("./users/login", {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }

    res.render("./users/login");
  },

  processLogin: (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.render("./users/login", {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }

    db.Users.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((userToLogin) => {

        if (!userToLogin) {
          return res.render("./users/login", {
            errors: {
              email: {
                msg: "User not found",
              },
            },
            oldData: req.body,
          });

        } else {
          let passwordCheck = bcrypt.compareSync(
            req.body.password,
            userToLogin.password
          );

          if (passwordCheck) {
            
            delete userToLogin.password; // Doesn't work?

            req.session.userLogged =  userToLogin;

            if (req.body.rememberMe) {
              res.cookie("userEmail", req.body.email, {
                maxAge: 1000 * 60 * 2,
              });
            }
            return res.redirect("/");

          } else {
            return res.render("./users/login", {
              errors: {
                password: {
                  msg: "Wrong password",
                },
              },
              oldData: req.body,
            });
          }
        }
      })

      .catch(function () {
        res.render("./users/login", {
          error: { msg: "Invalid credentials" },
        });
      });
  },

  logout: (req, res) => {

    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");

  },

  profile: (req, res) => {

    res.render("./users/profile", {
      user: req.session.userLogged,
    });

  },

  edit: (req, res) => {

    res.render("./users/editUser", {
      user: req.session.userLogged,
    });

  },

  processEdit: (req, res) => {
    
    db.Users.update(
      {
        username: req.body.username,
      },
      {
        where: {
          email: req.session.userLogged.email,
        },
      }
    ).then(() => {
      res.redirect("/users/profile");
    });
  },
};

module.exports = userController;
