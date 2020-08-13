module.exports = function (app) {
  const users = require("../controllers/userController");
  app.route("/users").get(users.listAll).post(users.createOne);
};
