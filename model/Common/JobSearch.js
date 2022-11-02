const mongoose = require("mongoose");
const JobSearch = mongoose.Schema({
  _id: {type: mongoose.Schema.Types.ObjectId},
  title: {type: String, trim: true, required: true},
  description: {type: String, default: "", minLength: 30, maxLength: 100},
  year: {type: String, required: true},
  userID: [{types: mongoose.Schema.Types.ObjectId, ref: "job_seeker_schema"}]
}, { timestamps: true });



module.exports = mongoose.model('Job', JobSearch);