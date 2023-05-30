const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const date = new Date();
  res.send(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`);
});

app.listen(3000);
module.exports = app;
