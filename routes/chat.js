const express = require("express");
const router = express.Router();
require("dotenv").config();
const Pusher = require("pusher");
const models = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
var serviceMustExist = require("../guards/serviceMustExist");
var userShouldBeLoggedIn = require("../guards/userShouldBeLoggedIn");

// Pusher set up
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: "eu",
  useTLS: true,
});

// POST message - Page Chat.jsx
router.post(
  "/messages/:id",
  serviceMustExist,
  userShouldBeLoggedIn,
  async (req, res) => {
    const { id } = req.params;
    const text = req.body.data.message;
    const { user_id } = req;
    const { service_creator, assigned_to } = req.service;
    const sender_id = user_id;
    let receiver_id;
    try {
      receiver_id =
        sender_id === service_creator ? assigned_to : service_creator;
      //store in DB
      models.Message.create({ sender_id, receiver_id, text, ServiceId: id });

      // Send message to Pusher
      const channelName = `service-${id}`;
      pusher.trigger(channelName, "message", {
        text,
        sender_id,
        receiver_id,
      });

      res.send({ msg: "Sent" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

// list of messages between 2 users up to 10 messages
router.get("/messages/:id", userShouldBeLoggedIn, async (req, res) => {
  const { user_id } = req;
  const { id } = req.params;
  try {
    const messages = await models.Message.findAll({
      where: {
        ServiceId: id,
        [Op.or]: [{ sender_id: user_id }, { receiver_id: user_id }],
      },
      limit: 10,
      order: [["id", "DESC"]],
    });
    res.json({ messages });
  } catch (err) {
    res.status(500).send(err);
  }
});

// list of my services - List component
router.get("/myservices", userShouldBeLoggedIn, async (req, res) => {
  const { user_id } = req;
  try {
    const services = await models.Service.findAll({
      attributes: ["id", "service_name"],
      where: {
        [Op.or]: [{ service_creator: user_id }, { assigned_to: user_id }],
      },
    });
    res.json({ services });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
