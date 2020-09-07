const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Users = require("./src/model/userModel");
const app = express();
const routes = require("./src/routes/userRoutes");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/toDoListMongoDb", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.route("/").get((req, res) => {
  res.send("Accessed the To Do List API!");
});

const port = process.env.PORT || 3000;

app.listen(port);
console.log("Application Started at the door", port);
