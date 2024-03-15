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

// // Jana GET all categorie names
// router.get("/categories", userShouldBeLoggedIn, async function (req, res) {
//   try {
//     const response = await models.Category.findAll({
//       attributes: ["category_name"],
//     });
//     res.send(response);
//     // res.send({ title: "Express" });
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// Ari GET categories, select * from categories
router.get("/types", async function (req, res, next) {
  try {
    const response = await models.Category.findAll();
    res.json(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
