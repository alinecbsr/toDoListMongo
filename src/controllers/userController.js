const mongoose = require("mongoose");
const Users = mongoose.model("Users");

exports.createOne = async (req, res) => {
  try {
    newUser = req.body;
    user = await Users.create(newUser);
  } catch (error) {
    res.status(400).json(error);
    return;
  }
  let response = {
    message: "User successfully registered",
    data: user,
  };
  res.status(201).json(response);
};

exports.update = async (req, res) => {
  try {
    updateUser = req.params.id;
    userUpdate = await Users.findOneAndUpdate(updateUser, req.body, {
      new: true,
    });
  } catch (error) {
    res.status(406).json(error);
    return;
  }
  let response = {
    message: "User found successfullyUser data updated successfully",
    data: userUpdate,
  };
  res.status(201).json(response);
};

exports.delete = async (req, res) => {
  try {
    deleteUser = { _id: req.params.id };
    deletedUser = await Users.deleteOne(deleteUser);
  } catch (error) {
    res.status(406).json(error);
    return;
  }
  let response = {
    message: "User successfully deleted",
    data: deletedUser,
  };
  res.status(201).json(response);
};

exports.showOne = async (req, res) => {
  try {
    listOneUser = req.params.id;
    oneUser = await Users.findById(listOneUser);
  } catch (error) {
    res.status(406).json(error);
    return;
  }
  let response = {
    message: "User found successfully",
    data: oneUser,
  };
  res.status(201).json(response);
};

exports.listAll = async (req, res) => {
  users = await Users.find();
  res.send(users);
};
