const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
    vendor_id: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
    cost_id: { type: mongoose.Types.ObjectId, required: true, ref: "costs" },
  },
  {
    timestamps: true,
  }
);
const CartModel = mongoose.model("cart", CartSchema);
module.exports = { CartModel, CartSchema };
