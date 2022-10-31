const mongoose = require("mongoose");
const skill_Schema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  skillName: { type: String, default: "" }
}, { timestamps: true });

module.exports = mongoose.model("Skill", skill_Schema)