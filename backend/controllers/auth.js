require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const User = require("../models/userModel");

const login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const isUserReg = await User.findOne({ username });
    if (!isUserReg) {
      res.status(200).json({ message: "User is not registered" });
    }
    const dbPass = isUserReg.password;
    const isPassRight = bcrypt.compareSync(password, dbPass);
    if (!isPassRight) {
      res.status(400).json({ message: "Invalid password" });
    }
    jwt.sign({ username }, process.env.SECRET, {}, (err, token) => {
      if (err) {
        throw err;
      }
      res.cookie("token", token).json({
        username,
        token,
      });
    });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const register = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {
    const hash = bcrypt.hashSync(password, salt);
    await User.create({
      username,
      password: hash,
      generatedURLs: [],
    });
    res.status(200).json({ message: "User has been successfully registered." });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

const logout = async (req, res) => {
  res.cookie("token", "").json({ message: "Logged out successfully" });
};

const profile = async (req, res) => {
  const { token } = req.cookies;
  try {
    jwt.verify(token, process.env.SECRET, {}, (err, data) => {
      if (err) {
        throw err;
      }
      res.status(200).json(data);
    });
  } catch (err) {
    res.status(400).json({ message: "Not logged in" });
  }
};

module.exports = {
  login,
  register,
  logout,
  profile,
};
