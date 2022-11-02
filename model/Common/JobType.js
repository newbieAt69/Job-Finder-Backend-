const mongoose = require("mongoose");
const JobTypeSchema = mongoose.Schema({
  _id: {type: mongoose.Schema.Types.ObjectId},
  types: {
	  wfo: {type: Number},
    wfh: {type: Number},
	  remote: {type: Number},
	  contract: {type: Number},
	  pt: {type: Number} //** Part time
  },
  jobId: [{types: mongoose.Schema.Types.ObjectId, ref: "jobID"}]
}, { timestamps: true });



module.exports = mongoose.model('JobType', JobTypeSchema);