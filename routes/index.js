var express = require("express");
var router = express.Router();
const Sequelize = require("sequelize");
require("dotenv").config();

const models = require("../models");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ title: "Express" });
});

// Get all the services - do we use this same endpoint and then map throguh different 

router.get("/myservices", async function (req, res, next) { 
const user = await models.User.findOne({
  where: {
    id,
  },
});
try {
const servicesCreated = await user.getServices();
res.send(servicesCreated);

} catch (error) {
  res.status(500).send(error);
}
});


module.exports = router;
