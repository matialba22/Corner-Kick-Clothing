const { check } = require("express-validator");

const productCreateValidator = [
    check("name")
        .notEmpty()
        .withMessage("You must enter a name")
        .bail()
        .isLength({min: 4})
        .withMessage("Must at least have 4 characters"),
    check("price")
        .notEmpty()
        .withMessage("You must enter a price")
        .bail()
        .isFloat({ min: 0, max: 10000000 })
        .withMessage("The price must be a positive number and must have less than 7 digits"),
    check("description")
        .isLength({ min: 4, max: 500 })
        .withMessage("The description does not fit the allowed length")
        .bail()
        .notEmpty()
        .withMessage("You must enter a description"),
    check("category")
        .notEmpty()
        .withMessage("You must choose a category"),
    check("subcategory")
        .notEmpty()
        .withMessage("You must choose a subcategory"),
    check("brand")
        .notEmpty()
        .withMessage("You must choose a brand"),
]

module.exports = productCreateValidator;