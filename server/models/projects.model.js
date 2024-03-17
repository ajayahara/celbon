const mongoose = require("mongoose");
const ProjectsSchema = new mongoose.Schema({
  user_id: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
  vendor_id: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
  rating: { type: Number },
  review: { type: String },
  desc:{type:String},
  start_date: { type: String },
  end_date: { type: String },
});
ProjectsSchema.virtual("collections", {
  ref: "Collection",
  localField: "_id",
  foreignField: "projectId",
  justOne: false,
});
const ProjectsModel = mongoose.model("projects", ProjectsSchema);
module.exports = { ProjectsModel, ProjectsSchema };
