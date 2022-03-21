const express = require('express')
const Books = require()
const router = express.Router();

router.post("", async(req,res)=>{
    try {
        const book = await Books.create(req.body); 
    } catch (error) {
        console.log({error:error})
    }
});
module.exports = router;