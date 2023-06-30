const db = require("../database/models");

const userController = {
  register: (req, res) => {
    res.render("./users/register");
  },
};

module.exports = userController;
