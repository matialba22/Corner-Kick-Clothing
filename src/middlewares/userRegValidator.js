const { check } = require("express-validator");

const userRegValidator = [
  check("email")
    .notEmpty()
    .withMessage("You must enter an email")
    .bail()
    .isEmail()
    .withMessage("You must enter a valid email"),

  check("username")
    .notEmpty()
    .withMessage("You must pick a username")
    .bail()
    .isLength({min: 4, max: 10})
    .withMessage("Must have at least 6 characters and a maximum of 10")
    .bail()
    .matches(/^[A-Za-z]+$/)
    .withMessage("Your username must be letters only"),

  check("password")
    .notEmpty()
    .withMessage("You must enter a password")
    .bail()
    .isLength({ min: 6, max: 20 })
    .withMessage("Must have at least 6 characters and a maximum of 20")
    .bail()
    .matches(/^(.*\d.*)$/)
    .withMessage("Must contain at least one symbol")
    .bail()
    .matches(/^(.*[A-Z].*)$/)
    .withMessage("Must contain at least one capital letter")
    .bail()
    .matches(/^(.*[a-z].*)$/)
    .withMessage("Must contain at least one lowercase letter"),
];

module.exports = userRegValidator;
