require("dotenv").config();
const express = require("express");
const { connection } = require("./config/db");
const { userRoute } = require("./routes/user.router");

const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
// Routes
app.use("/user", userRoute);

app.get("/", (req, res) => {
  return res.json({ ok: true, message: "You are on home page" });
});

const server = app.listen(port, async () => {
  try {
    await connection;
    console.log(`Connected to Db. \nServer is running at ${port}.`);
  } catch (error) {
    console.log("Error: Couldn`t connect");
    console.log(error);
  }
});
