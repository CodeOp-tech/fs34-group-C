var express = require("express");
var router = express.Router();
const Sequelize = require("sequelize");
require("dotenv").config();
var userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
const models = require("../models");
const { Op } = require("sequelize");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ title: "Express" });
});

/* Create service request (Jana) */
router.post("/services", userShouldBeLoggedIn, async function (req, res) {
  const { user_id } = req;
  const {
    service_name, // a title
    service_description, // what the job is about
    date, // on which day do I need the job to be done
    time_required, // how many hours my job will take
    points, // how many points you can earn by doing this job
    CategoryId, // to which of the pre-defined categories the job belongs
  } = req.body;

  try {
    const service = await models.Service.create({
      service_name,
      service_description,
      date,
      time_required,
      points,
      service_creator: user_id,
      CategoryId,
    });
    res.send(service);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get all jobs by a certain Category ID, amount of points and time_required (for Filtering) (Jana)
router.get("/services", userShouldBeLoggedIn, async function (req, res) {
  try {
    const { category, points, time_required } = req.query;

    // creating an object that gets built depending on what gets sent through req.quere
    // and that later gets sent into the "where" of my fetch request
    let query = { CategoryId: category };
    // if points gets filtered, we add a property .points to query and define it as findAll greater than or equal (gte) a value

    if (points)
      query.points = {
        [Op.gte]: points,
      };

    // if time_required gets filtered, we add a property .time_required to query and define it as findAll less than or equal (lte) a value
    if (time_required)
      query.time_required = {
        [Op.lte]: time_required,
      };

    // fetching my data according to what I have in my query object aka what I get from my req.quere
    const response = await models.Service.findAll({
      where: query,
    });
    console.log(response);
    res.send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get all information from one service by ID (Alys) - working 18/03
router.get("/details/:id", userShouldBeLoggedIn, async function (req, res) {
  try {
    const { id } = req.params;
    const response = await models.Service.findOne({
      where: { id: id },
    });
    console.log(response);
    res.send(response);
  } catch (err) {
    res.status(500).send(err);
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

//Alys GET all info of one job by id

module.exports = router;
