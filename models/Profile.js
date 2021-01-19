const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  title: String,
  intro: String, //short intro, one sentence maybe
  ig_followers: String,
  ig_link: String,
  pictures: [String],
  clickCnt: {
    type: Number,
    default: 0,
  },
  showCnt: {
    type: Number,
    default: 0,
  },
  rate: {
    type: Number,
    defaut: 0,
  },
});

module.exports = mongoose.model("Profiles", ProfileSchema);
