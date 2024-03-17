const mongoose = require("mongoose");
const DocsSchema = new mongoose.Schema({
  user_id: { type: mongoose.Types.ObjectId, required: true, ref: "users" },
  adhar: {
    photo: { type: String, required: true },
    uadai_no: { type: Number, required: true },
    is_verified: { type: Boolean, default: false },
  },
  pan: {
    photo: { type: String, required: true },
    account_no: { type: String, required: true },
    is_verified: { type: Boolean, default: false },
  },
  account: {
    photo: { type: String, required: true },
    bank_name: { type: String, required: true },
    account_no: { type: String, required: true },
    ifsc_code: { type: String, required: true },
    is_verified: { type: Boolean, default: false },
  },
});
const DocsModel = mongoose.model("docs", DocsSchema);
module.exports = { DocsModel, DocsSchema };
