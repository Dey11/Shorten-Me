const express = require("express");
const { shortenUrl, redirectUrl } = require("../controllers/url");

const router = express.Router();

router.post("/", (req, res) => {
  shortenUrl(req, res);
});

router.get("/:url", (req, res) => {
  redirectUrl(req, res);
});

module.exports = router;
