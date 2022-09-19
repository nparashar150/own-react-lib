const path = require("path");
const express = require("express");

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.route("/").get((req, res) => {
  res.render("index.html");
});

app.listen(3000, () => {
  console.log("Site is live on: http://localhost:3000");
});
