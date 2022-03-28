
//  const app = express() ;

const express = require("express");
const crudController = require('./crud.controllers');
const User = require('../module/user.module');
const app = express();
const authenticate = require("../middleware/ath")




app.post("/", crudController.post(User));

//  const post =(model)=> async (req,res)=>{

//     try{
//         const item = await module.create(req.body) 
//     }
//     catch (err){
//         return res.status(500).send({err:err}) ; 
//     }
// }; 

// const deleteOne = (model) => async(req,res) =>{
//     try{
//         const item = await model.findByIdAndDelet(res.params.id).lean().exec() ;
//         return res.status(200).send(item) ; 
//     }
//     catch(err){
//         return res.status(500).send({err:err}); 
//     }
// }

// modul.exports = {post : post ,delete : deleteOne }; 


