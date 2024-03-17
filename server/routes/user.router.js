const express = require("express");
const {
  register,
  login,
  getAllUsers,
  getUserById,
} = require("../controllers/user.controller");

const userRoute = express.Router();

userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.get("/all", getAllUsers);
userRoute.get("/:userId", getUserById);

module.exports = { userRoute };
