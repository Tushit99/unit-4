const express = require("express"); 


const app = express(); 
app.use(express.json()) ; 


app.listen(5000,()=>{
    try{
        console.log("listning to port 5000")
    }
    catch (err){
        console.log("something went wrong")
    }
}) ; 



