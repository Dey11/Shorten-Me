const randomString = require("randomstring");
const URL = require("../models/urlModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const shortenUrl = async function (req, res) {
  const body = req.body;
  const username = req.isLogged.username;

  if (!body) return res.status(400).json({ message: "Invalid original link" });
  try {
    const shortUrlGen = randomString.generate(5);
    const shortUrl = {
      shortUrl: shortUrlGen,
      originalUrl: body.url,
      lastVisited: [],
    };
    await URL.create(shortUrl);
    res.json({
      message: "URL has been successfully shortened.",
      id: shortUrlGen,
    });
  } catch (err) {
    res.status(400).json({ message: `Error: ${err}` });
  }
};

const redirectUrl = async function (req, res) {
  const url = req.params["url"];
  const username = req.isLogged.username;

  if (!url) {
    res.status(400).message({ message: "URL not provided" });
  }
  try {
    const data = await URL.findOne({ shortUrl: url });
    if (!data) {
      throw "invalid url";
    }
    await URL.findOneAndUpdate(
      { shortUrl: url },
      {
        $push: {
          lastVisited: {
            timestamps: Date.now(),
          },
        },
      }
    );
    res.status(200).redirect(data.originalUrl);
  } catch (err) {
    res.status(400).json({ message: `Error: ${err}` });
  }
};

module.exports = {
  shortenUrl,
  redirectUrl,
};
