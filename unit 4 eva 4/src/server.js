 
const app = require("./index") ;

const connect = require("./config/db") ;

app.listen(5000, async()=>{
    try{
        await connect(); 
        console.log("listning to port 5000") ;
    }
    catch(err){
        console.log({err: err}) ; 
    }
})


