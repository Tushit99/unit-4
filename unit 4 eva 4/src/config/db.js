
const mongoose =require("mongoose") ;

module.exports = () =>{
    mongoose.connect("mongodb+srv://tushit:tushit@cluster0.peuob.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}


