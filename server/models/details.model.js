const mongoose = require("mongoose");
const DetailsSchema = new mongoose.Schema({
  user_id: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
  location: {
    longitude: { type: String },
    latitude: { type: String },
  },
  address: { type: String },
  profile_img: { type: String },
  bg_img: { type: String },
  slogan: { type: String },
  job: {
    type: String,
    enum: ["photographer", "pandit", "flourist", "designer", "event_planner"],
  },
  category: {
    type: String,
    enum: ["wedding", "holi", "bratpa_nayan", "birthday", "dasah", "party"],
  },
});

const DetailsModel = mongoose.model("details", DetailsSchema);
module.exports = { DetailsModel, DetailsSchema };
