const express = require("express");
const { connectToDB } = require("./db/dbConnect");
const router = require("./routes/urlRouter");
const router2 = require("./routes/authRouter");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const PORT = 3000 || process.env.PORT;
const app = express();

connectToDB(process.env.MONGODB_URL).then(() => {
  console.log("MongoDB connected");
});

app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());

app.use("/url", router);
app.use("/auth", router2);

app.listen(PORT, () => {
  console.log("the server is now running");
});
