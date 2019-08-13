const express = require("express");
const grocceries = express.Router();
const cart = require('./cart.js');

grocceries.get("/cart", (req, res)=> {
    res.send(cart);
    res.end();
})

grocceries.post("/cart", (req, res)=>{
    console.log(req.body);
})

grocceries.put("/cart/:id", (req, res)=>{
    console.log(req.params.id, req.body);
})

grocceries.delete("/cart/:id", (req, res)=>{
   console.log(req.params.id);
})



module.exports = grocceries;