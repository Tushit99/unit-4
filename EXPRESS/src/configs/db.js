
const mongoose = require("mongoose") ; 

module.exports = () =>{
    return mongoose.connect(
        "mongodb+srv://tushit:tushit@cluster0.e1kco.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
        );  
} ;
  

  
