const express = require("express");
const server = express();
const cors = require("cors");
const morgan = require("morgan");

server.use(morgan("dev"));
server.use(cors());
server.use(express.json());
require("./database");




server.use(express.json());
server.use("/",require("./routes/index"));
server.listen(3000);
console.log("server escuchando en el puerto", 3000)