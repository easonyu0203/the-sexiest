const express = require("express");

const app = express();

const PORT = 5050;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => console.log(`server listening at port ${PORT}`));
