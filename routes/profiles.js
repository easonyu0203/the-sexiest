const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");

// get request
router.get("/", async (req, res) => {
  const profiles = await Profile.find();
  res.json(profiles);
});

router.get("/resetCnt", async (req, res) => {
  const profiles = await Profile.find();
  const ps = [];
  for (let i = 0; i < profiles.length; i++) {
    profiles[i]["showCnt"] = 0;
    profiles[i]["clickCnt"] = 0;
    profiles[i]["rate"] = 0;
    ps.push(await profiles[i].save());
  }
  const arr = await Promise.all(ps);
  res.json(arr);
});

router.get("/:name", async (req, res) => {
  const profile = await Profile.findOne({ name: req.params.name });
  res.json(profile);
});

router.get("/top/:count", async (req, res) => {
  const profiles = await Profile.find()
    .sort({ rate: -1 })
    .limit(Number(req.params.count));
  res.json(profiles);
});

router.get("/random/:count", async (req, res) => {
  const allProfiles = await Profile.find();
  const count = req.params.count;
  const out = [];
  const indexs = randomNumbers(0, allProfiles.length, count);
  for (let i in indexs) {
    out.push(allProfiles[indexs[i]]);
  }
  res.json(out);
});

const randomNumbers = (min, max, count) => {
  const arr = [];
  if (max < count) {
    throw Error("not enough distinct values");
  }
  while (arr.length < count) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    if (!arr.includes(num)) {
      arr.push(num);
    }
  }
  return arr;
};

router.post("/", async (req, res) => {
  const profile = new Profile({
    name: req.body.name,
    title: req.body.title,
    intro: req.body.intro,
    ig_followers: req.body.ig_followers,
    ig_link: req.body.ig_link,
    pictures: req.body.pictures,
  });

  try {
    const saved_profile = await profile.save();
    res.json(saved_profile);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:name", async (req, res) => {
  const update = {};
  const t = await Profile.findOne({ name: req.params.name });
  if (req.body.name) {
    update["name"] = req.body.name;
  }
  if (req.body.title) {
    update["title"] = req.body.title;
  }
  if (req.body.intro) {
    update["intro"] = req.body.intro;
  }
  if (req.body.ig_followers) {
    update["ig_followers"] = req.body.ig_followers;
  }
  if (req.body.ig_link) {
    update["ig_link"] = req.body.ig_link;
  }
  if (req.body.pictures) {
    update["pictures"] = req.body.pictures;
  }
  if (req.body.showCnt) {
    update["showCnt"] = req.body.showCnt + t["showCnt"];
  }
  if (req.body.clickCnt) {
    update["clickCnt"] = req.body.clickCnt + t["clickCnt"];
  }
  if (req.body.showCnt || req.body.clickCnt) {
    update["rate"] = update["clickCnt"] / update["showCnt"];
  }
  try {
    const updatedProfile = await Profile.updateOne(
      { name: req.params.name },
      {
        $set: update,
      }
    );
    res.json(updatedProfile);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
