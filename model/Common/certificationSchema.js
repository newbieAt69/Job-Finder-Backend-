const mongoose = require("mongoose");
const CertificationSchema = mongoose.Schema({
  _id: {type: mongoose.Schema.Types.ObjectId},
  title: {type: String, trim: true, required: true},
  description: {type: String, default: "", minLength: 30, maxLength: 100},
  year: {type: String, required: true}
}, { timestamps: true });



module.exports = mongoose.model('Certification', CertificationSchema);