const mongoose = require("mongoose");
const jobPostSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  comapny_details: { type: mongoose.Types.ObjectId, ref: "company_schema" },
  postedBy: { type: mongoose.Types.ObjectId, ref: "recruiter_schema" },
  role: { type: String, require: true, trim: true, index: true },
  nodOfOpening: { type: Number, required: true },
  wfo: { type: Boolean, default: true }, // Work from home or work from office by default it'll be work of office
  max_salary: { type: Number, required: true },
  min_salary: { type: Number, required: true },
  joining_fees: { type: Boolean, required: true },
  joining_fees_amount: { type: Number, required: true },
  perks: [{ type: String, default: "" }],
  candidate_requirement: {
    type: mongoose.Schema.ObjectId, ref: "CANDIDATE_REQUIRE_SCHEMA"
  }
}, { timestamps: true });
  
module.exports = mongoose.model('JobPost', jobPostSchema);