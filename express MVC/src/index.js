const express = require("express");
const connect = require("./config/db.js") 

// for user 
const usersController =require("./controllers/users.controller.js")
//  students 
const studentsController =require("./controllers/students.controller.js")
// batch 
const batchsController =require("./controllers/batchs.controller.js")
// students submition 
const submissionsController =require("./controllers/submission.controller.js")

const evaluationsController =require("./controllers/evaluation.controller.js");

const { application } = require("express");
const app = express();
app.use(express.json());

app.use("/users",usersController)
app.use("/students",studentsController)
app.use("/batchs",batchsController)
app.use("/submissions",submissionsController)
app.use("/evaluations",evaluationsController)

app.listen(5000, async () => {
    try {
        await connect();
        console.log("Connection Established")
        console.log("Listening to port 5000");

    } catch (error) {
        console.log("Please check spelling");
    }
});
