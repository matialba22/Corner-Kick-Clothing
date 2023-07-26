const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

const userRegValidator = require("../middlewares/userRegValidator");
const authMW = require("../middlewares/authMW");

router.get("/register", authMW, userController.register);
router.post("/register", userRegValidator, userController.processRegister);
router.get("/login", authMW, userController.login);
router.post("/login", userController.processLogin);
router.post("/logout", userController.logout);
router.get("/profile", userController.profile);

module.exports = router;
