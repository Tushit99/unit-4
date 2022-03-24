const express = require("express") ;   

const {body, validationResult} = require("express-validator")  

const User = require("../models/user.models");   

const router = express.Router() ;    

router.get("", async (req, res) => {
  try {
      const sections = await User.find({}).lean().exec()  
      
      return res.status(200).send({ Sections: sections });
  } catch (error) {
      return res.status(500).send("problem with network");
  }

});

router.post("",
// firstName ------------------>  
  body("firstName")
  .trim()
  .not()
  .isEmpty()
  .bail()
  .withMessage("First Name cannot be empty")
  .isLength({ min: 4 })
  .withMessage("First Name must be at least 4 characters") ,  
//  email -------------------->   
  body("email")
  .isEmail()
  .custom(async (value) => {
  const user = await User.findOne({ email: value });

  if (user) {
    throw new Error("Email is already taken");
  }
  return true;
}) ,  
// age ----------------------->
  body("age")
    .not()
    .isEmpty()
    .withMessage("Age cannot be empty")
    .isNumeric()
    .withMessage("Age must be a number between 1 and 120")
    .custom((val) => {
      if (val < 1 || val > 120) {
        throw new Error("Incorrect age provided");
      }  
      return true;
    }),
// pincode --------------------->
    body("pincode")
    .not()
    .isEmpty()
    .withMessage("Age cannot be empty")
    .isNumeric()
    .withMessage("Age must be a number between 1 and 120")
    .isLength({ min: 6 })
    .withMessage("pincode must be of 6 numbers")  
    .custom((val) => {
      if (val < 99999 || val > 1000000){
        throw new Error("Incorrect pincode provided");
      } 
      return true;
    }),
    async (req, res)=>{
    try{
        const errors = validationResult(req);
        // console.log({ errors });
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array()});
        }

        const user = await User.create(req.body); 

        return res.status(201).send(user); 
    }
    catch(err){
        return res.status(500).send({message : err.message}) ;
    }
}) ; 

module.exports = router  ; 

