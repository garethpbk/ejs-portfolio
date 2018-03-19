const express = require("express");
const router = express.Router();

router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.get("/about", (req, res) => {
  res.send("About me");
});

router.get("/work", (req, rest) => {
  res.send("My work");
});

module.exports = router;
