const { default: mongoose } = require("mongoose");

// *** Company Schema *** //
const company_schema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  companyName: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  location: {
    location: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    pin: { type: String, required: true, trim: true },
  },
  comapny_website: { type: String, required: true, trim: true },
  noOfEmp: { type: Number, default: 0 },
  typeofCompany: { type: String, require: true, trim: true },
  jobs: [{ type: mongoose.Type.ObjectId, ref: "job_post_basic" }]
}, { timestamps: true });

module.exports = mongoose.model("Company", company_schema)