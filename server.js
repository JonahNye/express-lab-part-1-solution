const express = require('express');

const bodyParser = require('body-parser');
const server = express();
const cors = require("cors");

const grocceries = require("./routes.js")
server.use(cors())
server.use(bodyParser.json());
server.use("/", grocceries);
server.listen(8000, (err)=>{
    console.log("listening on port 8000");
})