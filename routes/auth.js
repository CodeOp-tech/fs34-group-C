var express = require("express");
var router = express.Router();
const Sequelize = require("sequelize");
require("dotenv").config();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
