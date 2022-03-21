
const mongoose = require("mongoose"); 
const userSchema = new mongoose.Schema({
    firstName: {type:String , required:true} ,
    lastName :  {type:String , required:true} ,   // (string, optional, if given then minimum length 3 and maximum length 30)
    age :  {type:String , required:true} ,  //(integer, required, should be between 1 and 150)
    email :  {type:String , required:true , unique: true } ,   // (string, required, unique)
    profileImages:  {type:String , required:true} , // (array of imageUrls and atleast 1 profile image is required)
},{
    timestamps: true ,
    versionKey : false 
})

module.exports = new mongoose.Schema("user", userSchema ) ;   


