const express = require("express") ; 

const mongoose = require("mongoose") ; 

const app = express();  

app.use(express.json()) ; 

const connect =()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/exam2") 
}
//  detail 
const bankSchema = new mongoose.Schema(
    {
        firstName : { type: String ,require : true } ,
        lastName :  { type: String ,require : true }, 
        age :  { type: Number ,require : true } , 
        email :  { type: String ,require : true } ,
        address :  { type: String ,require : true } , 
        gender :  { type: String ,require : true } ,
    }, 
    {
        versionKey : false ,
        timestamps : true  , 
    }
);  

const user = mongoose.model("user",bankSchema) ;   

const branchSchema = new mongoose.Schema(
    {
        name :  { type: String, require : true } , 
        address : { type: String, require : true } , 
        IFSC : { type: String, require : true } , 
        MICR : { type: String, require : true } , 
    }, 
    {
        versionKey : false ,
        timestamps : true  , 
    }
) ;  

const branch = mongoose.model("branch", branchSchema) ;  

const masterSchema = new mongoose.Schema(
    {
        balance : {type :Number , required: true } , 
        userId : {
            type : mongoose.Schema.Types.ObjectId , 
            ref : "user" , 
            required : true 
        }, 
        branchId : {
            type : mongoose.Schema.Types.ObjectId , 
            ref : "branch" , 
            required : true ,
        }
    }, 
    {
        versionKey : false ,
        timestamps : true  , 
    }
);   

const master = mongoose.model("master", masterSchema);   

const SavingSchema = new mongoose.Schema(
    {
        account_number : { type : true ,required : true , unique : true} , 
        balance : { type : true ,required : true} , 
        interestRate : { type : true ,required : true} ,
        branchId : {
            type : mongoose.Schema.Types.ObjectId , 
            ref : "branch" , 
            required : true ,
        }
    },
    {
        versionKey : false ,
        timestamps : true  , 
    }
);  

const Saving = mongoose.Schema("savung", SavingSchema) ; 

const fixedSchema = new mongoose.Schema (
    {
        account_number : {type : Number , require: true } ,
        balance : { type : Number , require : true }, 
        interestRate : {type : Number , require : true } , 
        startDate : {type : String , require : true } , 
        maturityDate : {type : String  , require : true } , 
        branchId : {
            type : mongoose.Schema.Types.ObjectId , 
            ref : "branch" , 
            required : true ,
        }
    }, 
    {
        versionKey : false ,
        timestamps : true  , 
    }
)

const fixed = mongoose.Schema("fixed", fixedSchema) ; 


app.listen(5544,()=> {
    try{
        await connect() ; 
        console.log("listning to port 5544")
    }
    catch(error){
        console.log("there is an error")
    }
}) ; 
