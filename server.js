const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./src/routes/userRoutes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.route("/").get((req, res) => {
  res.send("Acessou a API da To Do List!");
});

const port = process.env.PORT || 3000;

app.listen(port);

console.log("Aplicacão Iniciada na porta", port);
