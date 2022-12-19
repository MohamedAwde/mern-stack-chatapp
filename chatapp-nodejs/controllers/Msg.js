const Msg = require("./../modules/Msg");
const express = require("express");
const router = express.Router();
const Joi = require("joi");

router.route("/").post(async (req, res) => {
  const req_msg_data = { user: req.body.user, text: req.body.text };

  const schema = Joi.object({
    user: { _id: Joi.string().required(), name: Joi.string().required() },
    text: Joi.string(),
  });

  const { error } = schema.validate(req_msg_data);
  if (error) {
    console.log(error);
    return res.status(409).json({ message: error.details[0].message });
  }
  try {
    const message = new Msg(req_msg_data);
    const new_message = await message.save();
    new_message.populate("user", "name");
    // brodcast to all conneceted devices
    return res.send(new_message);
  } catch (error) {
    res.status(500).send({ message: "Eerror while submiting a new message" });
  }
});

router.route("/").get(async (req, res) => {
  try {
    const messages = await Msg.find()
      .lean()
      .select("-__v")
      .populate("user", "name");
    if (messages?.length > 0) {
      return res.json(messages);
    } else {
      return res.json({ message: "No messages yet", new_message });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error while retrieving messages list" });
  }
});

module.exports = router;
