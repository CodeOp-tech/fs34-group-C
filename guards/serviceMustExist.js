const models = require("../models");

const serviceMustExist = async function (req, res, next) {
  try {
    const { id } = req.params;
    const service = await models.Service.findOne({
      where: { id },
    });
    if (service) {
      req.service = service;
      next();
    } else {
      res.status(404).send({ message: "Service not found" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = serviceMustExist;
