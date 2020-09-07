module.exports = function (app) {
  const users = require("../controllers/userController");

  app.route("/users").post(users.createOne).get(users.listAll);

  app
    .route("/users/:id")
    .get(users.showOne)
    .put(users.update)
    .delete(users.delete);
};
