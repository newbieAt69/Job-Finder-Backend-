const mongoose = require("mongoose");

const JobSeeker = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  firstName: { type: String, required: true, trim: true, minLength: "3" },
  lastName: { type: String, required: true, trim: true, minLength: "3" },
  email: { type: String, required: true, trim: true, minLength: "8", unique: true },
  profile_pic: { type: String, default: "" },
  cv: { type: String, default: "", required: true },
  skills: [{ types: mongoose.Schema.Types.ObjectId, ref: "skill_Schema" }], // **** Store skill ID...
  certification: [{ types: mongoose.Schema.Types.ObjectId, ref: "certification_Schema" }], // **** Store skill ID...
  social_links: {
    linkedIn: { type: String, default: "" },
    github: { type: String, default: "" },
    website: { type: String, default: "" }
  },
  address: {
    location: { type: String, default: "" },
    city: { type: String, default: "" },
    country: { type: String, default: "" },
  },
}, {timestamps: true});

module.exports = mongoose.model("JobSeeker", JobSeeker);