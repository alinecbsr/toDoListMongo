const mongoose = require("mongoose");
const Users = mongoose.model('Users');

exports.listAll = async (req, res) => {
  users = await Users.find();
  res.send(users);
};

exports.createOne = async (req, res) => {
  try {
    newUser = req.body;
    ret = await Users.create(newUser);
  } catch (error) {
    res.status(400).json(error);
    return;
  }
  res.status(201).json(ret);
};
