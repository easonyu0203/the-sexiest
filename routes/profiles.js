const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");

router.get("/", async (req, res) => {
  const profiles = await Profile.find();
  res.json(profiles);
});

router.post("/", async (req, res) => {
  const profile = new Profile({
    name: req.body.name,
    country: req.body.country,
    profession: req.body.profession,
    intro: req.body.intro,
    ig_followers: req.body.ig_followers,
    ig_link: req.body.ig_link,
  });

  try {
    const saved_profile = await profile.save();
    res.json(saved_profile);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
