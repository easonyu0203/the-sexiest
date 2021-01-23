const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

// import routes
const profilesRoute = require("./routes/profiles");

const PORT = 5000;

app.use("/api/profile", profilesRoute);

app.use(express.static(path.join(__dirname, "frontend", "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

mongoose.connect(
  process.env.DB_URL,
  (Option = { useNewUrlParser: true, useUnifiedTopology: true }),
  () => {
    console.log("connected to mongodb!");
  }
);

app.listen(PORT, () => console.log(`server listening at port ${PORT}`));
