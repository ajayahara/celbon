const mongoose = require("mongoose");
const CollectionsSchema = new mongoose.Schema({
  user_id: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
  project_id: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "projects",
  },
  img_url: { type: String },
});
const CollectionsModel = mongoose.model("collections", CollectionsSchema);
module.exports = { CollectionsSchema, CollectionsModel };
