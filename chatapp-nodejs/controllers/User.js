const User = require("../modules/User");
const express = require("express");
const router = express.Router();
const Joi = require("joi");

router.route("/").get(async (req, res) => {
  try {
    const users = await User.find().lean().select("-password");
    if (users?.length > 0) {
      return res.json(users);
    } else {
      return res.json({ message: "No users found" });
    }
  } catch (error) {
    return res.json({ message: "Error while retrieving users list" });
  }
});

router.route("/up").post(async (req, res) => {
  const schema = Joi.object({
    username: Joi.string(),
    name: Joi.string(),
    password: Joi.string(),
    avatar: Joi.string().optional(),
  });

  const { error } = schema.validate(req.body, {
    options: { allowUnknown: true },
  });
  if (error) {
    return res.status(409).json({ message: error.details[0].message });
  }

  const userdata = {
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    avatar: req.body.avatar,
  };
  try {
    const new_user = new User(userdata);
    await new_user.save();
  } catch (error) {
    console.log(error);
    return res.status(409).json({ message: "Duplicate username" });
  }
  return res.json({ message: `User ${userdata.username} was created` });
});

router.route("/in").post((req, res) => {
  const req_msg_data = { username: req.body.username, text: req.body.text };
  return res.json(req_msg_data);
});

router.route("/out").post((req, res) => {
  const req_msg_data = { username: req.body.username, text: req.body.text };
  return res.json(req_msg_data);
});

module.exports = router;
