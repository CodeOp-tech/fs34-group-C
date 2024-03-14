var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var models = require("../models");
const Sequelize = require("sequelize");
require("dotenv").config();
var bcrypt = require("bcrypt");
const saltRounds = 10;
const supersecret = process.env.SUPER_SECRET;
var userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");


//Alys: get user information by id (for dashboard) - need to test with log in (before was :id)
router.get("/user", userShouldBeLoggedIn, async function (req, res) {
    const { id } = req;
  
    try {
      //find the user using the primary key
      const user = await models.User.findByPk(id);
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  
  // Alys - get all services for one user
  //question to self: shall we use this same endpoint and then map through them to show different keys - possibly yes
  
  router.get("/myservices", userShouldBeLoggedIn, async function (req, res) { 
    const { id } = req;
    try {
      models.User.findOne({
        where: {
          id,
        },
      });
  
      const services = await user.getServices();
      res.send(services)
    
  
  } catch (error) {
    res.status(500).send(error);
  }
  });
  
  //Alys: add a new catagory/ user relationship - test this 
  
  router.post("categories", userShouldBeLoggedIn, async function (req, res){
    const { id } = req;
    const { categories } = req.body; //want to make this a list so it can be a drop down 
    try {
    const user = await models.User.findOne({
      where: {
        id,
      },
    });
    
    // const category = await models.Category.findOne({
    //   where: {
    //     id: categories,
    //   },
    // });
    await user.addCategory(categories);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
  
  });

  module.exports = router;