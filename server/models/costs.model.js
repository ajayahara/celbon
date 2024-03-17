const mongoose = require("mongoose");
const CostsSchema = new mongoose.Schema({
  user_id: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
  name: { type: String, required: true },
  estimated_costs: { type: Number, required: true },
});
const CostsModel = mongoose.model("costs", CostsSchema);
module.exports = { CostsModel, CostsSchema };
