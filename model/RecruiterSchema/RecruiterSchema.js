const { default: mongoose } = require("mongoose");

// *** RECRUITER SCHEMA *** //
const recruiter_schema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  recruiter_name: { type: String, required: true, trim: true },
  recruiter_contact: {
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
  },
  position: { type: String, required: true, trim: true },
  owner: { type: Boolean, default: false }, // ** Owner of the company or not
  company_datils: {
    type: mongoose.Types.ObjectId, ref: "company"
  }
}, { timestamps: true });

module.exports = mongoose.model('Recruiter', recruiter_schema);
