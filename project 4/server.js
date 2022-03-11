
const express = require("express");
const mongoose = require("mongoose")

const app = express();
  
// Connect MongoDB
  
const connectDB = () => {
    //mongodb url
 return mongoose.connect("mongodb://localhost:27017/user")
}

// create Schema - basically a structure of our document

const userSchema = mongoose.Schema({
    movie : String , 
    first_name : String,
    last_name : String,
    email : String,
    gender : String,
    ip_address : String, 
})

// Model

// users - user
const User = mongoose.model("user", userSchema)
//  db.user


app.get("/users", async (req,res) => {
    const userData = await User.find({},{first_name:1, _id : 0}).limit(10).lean().exec();
    console.log(userData) 
    return res.send(userData) 
})




app.listen(4541,async() => {
    try{
        await connectDB();
        console.log("listening at 4541")
    }
    catch(err){
        console.log(err)
    }
       
})



