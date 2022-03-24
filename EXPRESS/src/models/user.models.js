
const mongoose = require("mongoose") ; 

const userSchema = new mongoose.Schema(
    {
        firstName : { type:String , required: true } , 
        lastName : { type:String , required: false } , 
        email : { type:String , required: true, unique:true} ,
        pincode : { type: Number , required: true } ,
        age : { type: Number , required: true } ,
        gender : { type:String , required: false , enum:["Male", "Female","male","female","others","Others"] } ,
    }, {
        timestamps : true , 
        versionKey : false , 
    }  
); 
 
module.exports = mongoose.model("user", userSchema); 

    