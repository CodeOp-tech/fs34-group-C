var express = require("express");
var router = express.Router();
const Sequelize = require("sequelize");
require("dotenv").config();
var userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
const models = require("../models");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ title: "Express" });
});

//Alys: get user information by id (for dashboard)
router.get("/:id", async function (req, res, next) {
  const { id } = req.params;

  try {
    const user = await models.User.findByPk(id);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Alys WORK ON THIS IT DOESN'T WORK YET: Get all the services - do we use this same endpoint and then map throguh different

router.get("/myservices", async function (req, res, next) {
  try {
    const user = await models.User.findOne({
      where: {
        id,
      },
    });

    const servicesCreated = await user.getServices();
    res.send(servicesCreated);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* Create service request (Jana) */
router.post("/service", userShouldBeLoggedIn, async function (req, res) {
  const { user_id } = req;
  const {
    service_name, // a title
    service_description, // what the job is about
    date, // on which day do I need the job to be done
    time_required, // how many hours my job will take
    points, // how many points you can earn by doing this job
    category_id, // to which of the pre-defined categories the job belongs
  } = req.body;

  try {
    const service = await models.Service.create({
      service_name,
      service_description,
      date,
      time_required,
      points,
      service_creator: user_id,
      category_id,
    });
    res.send(service);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
