const express = require("express");
const { shortenUrl, redirectUrl } = require("../controllers/url");
const { isLoggedIn } = require("../middlewares/authCheck");

const router = express.Router();

router.post("/", isLoggedIn, (req, res) => {
  shortenUrl(req, res);
});

router.get("/:url", isLoggedIn, (req, res) => {
  redirectUrl(req, res);
});

module.exports = router;
