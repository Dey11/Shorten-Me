const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  generatedURLs: [
    {
      url: {
        type: String,
      },
      shortUrl: {
        type: String,
      },
      lastVisited: {
        type: Number,
      },
    },
  ],
});

const User = mongoose.model("users", userSchema);
module.exports = User;
