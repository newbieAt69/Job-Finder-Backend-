const mongoose = require("mongoose");
const SkillSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  skillName: { type: String, default: "" }
}, { timestamps: true });


module.exports = mongoose.model('Skill', SkillSchema);
