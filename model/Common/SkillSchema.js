const mongoose = require("mongoose");
<<<<<<< HEAD
const SkillSchema = mongoose.Schema({
=======
const skill_Schema = mongoose.Schema({
>>>>>>> 8429712deba7275dab7cc85eb03db02e3384ad32
  _id: { type: mongoose.Schema.Types.ObjectId },
  skillName: { type: String, default: "" }
}, { timestamps: true });

<<<<<<< HEAD


module.exports = mongoose.model('Skill', SkillSchema);
=======
module.exports = mongoose.model("Skill", skill_Schema)
>>>>>>> 8429712deba7275dab7cc85eb03db02e3384ad32
