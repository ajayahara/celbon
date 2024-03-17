const { UserModel } = require("../models/user.model");
const register = async (req, res) => {
  try {
    const { username, password, email, mobile } = req.body;
    let existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ ok: false, message: "User already exists" });
    }
    const hashPass = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      username,
      password: hashPass,
      email,
      mobile,
    });
    await newUser.save();
    return res
      .status(201)
      .json({ ok: true, message: "User registered successfully" });
  } catch (error) {
    console.error("Error in user registration:", error);
    return res
      .status(500)
      .json({ ok: false, message: "Internal server error" });
  }
};
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res
        .status(401)
        .json({ ok: false, message: "Invalid username or password" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ ok: false, message: "Invalid username or password" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });
    return res.status(200).json({ ok: true, token });
  } catch (error) {
    console.error("Error in user login:", error);
    return res
      .status(500)
      .json({ ok: false, message: "Internal server error" });
  }
};
const getAllUsers = async (req, res) => {
  
};
const getUserById = async (req, res) => {
  const {userId}=req.params;

};
module.exports = { register, login, getAllUsers, getUserById };
