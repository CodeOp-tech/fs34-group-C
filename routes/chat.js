const express = require("express");
const router = express.Router();
require("dotenv").config();
const Pusher = require("pusher");
const models = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: "eu",
  useTLS: true,
});

router.post("/:sender_id/:receiver_id", (req, res) => {
  let { sender_id, receiver_id } = req.params;
  let text = req.body.data.message;

  //send to Pusher
  pusher.trigger("my-channel", "message", {
    text,
    sender_id,
    receiver_id,
  });

  res.send({ msg: "Sent" });
});

module.exports = router;
