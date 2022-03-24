
const express = require("express") ; 

const userControllers = require("./controllers/user.controllers"); 

const app = express();  

app.use(express.json()) ; 

app.use("/user",userControllers); 

module.exports = app ; 

