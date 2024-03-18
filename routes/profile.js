var express = require("express");
var router = express.Router();
const Sequelize = require("sequelize");
require("dotenv").config();
var userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");
const models = require("../models");

// GET for user details
router.get("/user", userShouldBeLoggedIn, async function (req, res) {
  const { user_id } = req;
  try {
    const response = await models.User.findOne({
      attributes: ["email", "firstname", "lastname", "total_points"],
      where: { id: user_id },
    });
    res.send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Ari trial
router.get("/myservices", userShouldBeLoggedIn, async function (req, res) {
  const { user_id } = req;
  try {
    const response = await models.Service.findAll({
      where: { service_creator: user_id },
    });
    res.send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

//Alys: add a new catagory/ user relationship - test this

// router.post("/:id/categories", async function (req, res){
//   const { id } = req.params; //this will be just req when it works on login
//   const { categories } = req.body;
//   //want to make this a list so it can be a drop down: const {categories} = req.body;
//   try {
//   const user = await models.User.findOne({
//     where: {
//       id,
//     },
//   });
//   if (!user) {
//       return res.status(404).send("user not found")
//   }

//will lose this find and error if when we want multiple categoeies
// const category = await models.Category.findOne({
//   where: {
//     id: categories,
//   },
// });
// if (!category) {
//     return res.status(404).send("category not found")
// }
//   await user.addCategories(categories); //when it is a list this will say add Categories and categories
//   res.send(user);
// } catch (error) {
//   res.status(500).send(error);
// }

// });

module.exports = router;
