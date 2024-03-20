var express = require("express");
var router = express.Router();
const Sequelize = require("sequelize");
require("dotenv").config();
var userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
const models = require("../models");
const Op = Sequelize.Op;

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

// Get all jobs by a certain Category ID (Jana)
router.get("/services", userShouldBeLoggedIn, async function (req, res) {
  try {
    const { category } = req.query;
    const response = await models.Service.findAll({
      where: { CategoryId: category },
    });
    console.log(response);
    res.send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get all information from one service by ID - working 18/03
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

//getting the creator of a service (not going well) (Alys)
// router.get("/details/:id/creator", userShouldBeLoggedIn, async function (req, res) {
//   try {
//    //i have the service in the req params
//     //i want the creator of this service
//     //find the service
//    const { id } = req.params;
//    const service = await models.Service.findOne({
//      where: { id: id
//     },
//    });

//   // const user = await models.User.findOne({
//   //   where: { id: service.creator
//   //   }
//   // })

//   // const user = await service.getCreator();

//     console.log(response);
//     res.send(service);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

//create 'assigned-to' assocation when user accepts a job
router.post(
  "/details/:service_id/assigned",
  userShouldBeLoggedIn,
  async function (req, res) {
    const { service_id } = req.params;
    const { user_id } = req;
    try {
      const user = await models.User.findOne({
        where: {
          id: user_id,
        },
      });

      const service = await models.Service.findOne({
        where: {
          id: service_id,
        },
      });

      // points system before assigning to user
      const servicePoints = service.points;
      const serviceCreatorId = service.service_creator;
      const updatedUserPoints = user.total_points + servicePoints; // User assigned_to gains points

      const serviceCreator = await models.User.findOne({
        where: {
          id: serviceCreatorId,
        },
      });

      const updatedServiceCreatorPoints =
        serviceCreator.total_points - servicePoints; // service_creator loses points

      // Update points in the database
      await models.User.update(
        { total_points: updatedUserPoints },
        {
          where: { id: user_id },
        }
      );

      await models.User.update(
        { total_points: updatedServiceCreatorPoints },
        {
          where: { id: serviceCreatorId },
        }
      );

      await service.setAssignedTo(user); //so you need to use the alias that's in the model for service, you were close!
      res.send(service);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

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
