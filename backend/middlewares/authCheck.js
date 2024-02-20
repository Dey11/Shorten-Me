const jwt = require("jsonwebtoken");
require("dotenv").config();

const isLoggedIn = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    jwt.verify(token, process.env.SECRET, {}, (err, data) => {
      if (err) {
        throw err;
      }
      req.isLogged = {
        username: data.username,
      };
      next();
    });
  } catch (err) {
    next();
  }
};

module.exports = {
  isLoggedIn,
};
