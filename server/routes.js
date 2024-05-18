const express = require("express");

const { create ,login} = require("./userController.js");
///, deleteUser, getAll
const route = express.Router();

route.get("/",(req,res)=>{
    res.json("Hello"); 
})
route.post("/create", create); 
route.post('/login', login);
   
module.exports= route;   