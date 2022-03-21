const mongoose = require("mongoose"); 
const Publication = require("./Publication");
const bookSchema = new mongoose.Schema({
    likes : {type: Number, require:true } ,///(integer, minimum default is 0)
    coverImage : {type: String, require:true }, // (string, required and it can be 1 only)
    content : {type: String, require:true } ,  // ( string, required)  
    userId :{
        type: mongoose.Schema.Types.ObjectId, 
        ref : "user" ,
        require : true,  
    } , 
    Publication: {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "user" ,
        require : true,  
    }, commentId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : "comment" ,
        require : true ,  
    }
},{
    timestamps: true ,
    versionKey : false 
})


module.exports = new mongoose.Schema("user", bookSchema ) ; 

