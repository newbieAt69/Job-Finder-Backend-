const { default: mongoose } = require("mongoose");

const job_seeker_experience = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  userID: { types: mongoose.Schema.Types.ObjectId, ref: "job_seeker_schema" },
  job_title: { type: String, default: "" },
  company_name: { type: String, default: "" },
  description: { type: String, default: "", minLength: 30, maxLength: 100 },
  start_time: { type: String, default: "" },
  end_time: { type: String, default: "" },
}, { timestamps: true });

module.exports = mongoose.model('Job_Seeker_Education', job_seeker_education);