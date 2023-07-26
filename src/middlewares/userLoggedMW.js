const db = require("../database/models");

function userLoggedMW(req, res, next) {
  res.locals.loggedAcc = false;

  if (req.session && req.session.userLogged) {
    res.locals.loggedAcc = true;
    res.locals.userLogged = req.session.userLogged;
  }

  next();
}

module.exports = userLoggedMW;
