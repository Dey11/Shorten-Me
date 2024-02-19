const express = require("express");
const { register, login, logout, profile } = require("../controllers/auth");

const router = express.Router();

router.post("/register", (req, res) => {
  register(req, res);
});

router.post("/login", (req, res) => {
  login(req, res);
});

router.post("/logout", (req, res) => {
  logout(req, res);
});

router.get("/profile", (req, res) => {
  profile(req, res);
});

module.exports = router;
