const express = require("express");
const http = require("http");
const helmet = require("helmet");
const compression = require("compression");
require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const { Console } = require("console");

const app = express();
app.use(helmet()); //mejora seguridad)
app.use(compression()); // mejora el trafico slaiente
console.log("-", process.env.HTTP_PORT);
const serverHttp = http.createServer(app);
serverHttp.listen(process.env.HTTP_PORT, process.env.IP);
app.use(express.static("./public"));
app.get("/", function (req, res) {
  res.send(uuidv4());
});
app.get("/api/get-uuid", function (req, res) {
  res.send(uuidv4());
});
app.get("*", function (req, res) {
  res.status(404).send("Error 404 - Recurso no encontrado ");
});
