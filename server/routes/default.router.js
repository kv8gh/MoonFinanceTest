const express = require("express")
const router = express.Router();
//GET
router.get("/",(req,res)=>{
        try {
            res.send("Hello world!! ")
        } catch (error) {
            
        }
})
module.exports = router;