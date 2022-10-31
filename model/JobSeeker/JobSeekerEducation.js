const { default: mongoose } = require("mongoose");

const job_seeker_education = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  userID: { types: mongoose.Schema.Types.ObjectId, ref: "job_seeker_schema" },
  degree: { type: String, default: "" },
  study: { type: String, default: "" },  // *** Like which field ex. ECE, CSE
  college_name: { type: String, default: "" },
  start_time: { type: String, default: "" },
  end_time: { type: String, default: "" },
}, { timestamps: true });
