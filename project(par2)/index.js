const express = require("express") ; 

const app = express(); 
// console.log(app);  

app.get("/users",function (req,res){
    // console.log("Hello")  
    res.send("Hello") ; 
})

app.listen(5000, () => {
    console.log("listening on part 5000")
} )



