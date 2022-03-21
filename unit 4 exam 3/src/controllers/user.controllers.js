const express = require("express"); 
const user = require("../models/user");

const app = express()  ; 

const user = require("../models/user") ; 

app.get("/user",async(req,res)=>{
    try{
        const user = await user.find();   
    }
    catch(err){
        console.log(message = err.message); 
    }
}) ;



