
const express = require ("express");
const mongoose = require("mongoose");


const server = express.Router();



const Employee= require("../../models/Employee")

server.post("/add",(req,res) => {

const emp = new Employee({
    fullName:req.body.fullName,
    age: req.body.age,
    email:req.body.email,
    phone:req.body.phone,
    job:req.body.job,
    registerDate:new Date(),
    exp:req.body.exp,
})
emp.save().then(()=>res.send("seccuss")).catc
(console.log)

})
module.exports = server;