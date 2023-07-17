const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const userRegValidator = require("../middlewares/userRegValidator");

router.get("/register", userController.register);
router.post("/register", userRegValidator, userController.processRegister);
router.get("/login", userController.login);

module.exports = router;
