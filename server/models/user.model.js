const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile: {
      type: Number,
      required: true,
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v); // Validate if mobile number has 10 digits
        },
        message: (props) =>
          `${props.value} is not a valid 10-digit mobile number!`,
      },
      unique: true,
    },
    type: {
      type: String,
      enum: ["user", "admin", "superAdmin", "vendor"],
      required: true,
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("users", UserSchema);
module.exports = { UserModel, UserSchema };
