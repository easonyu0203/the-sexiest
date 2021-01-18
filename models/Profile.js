const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
  name: String,
  country: String,
  profession: String,
  intro: String, //short intro, one sentence maybe
  ig_followers: String,
  ig_link: String,
});

module.exports = mongoose.model("Profiles", ProfileSchema);
