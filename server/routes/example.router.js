const express = require("express")
const router = express.Router();
// --- READ ---
router.get("/",(req,res)=>{
    try {
        res.send("Get method called ")
    } catch (error) {
        
    }
})
// --- CREATE --- 
router.post("/:id" , (req,res)=>{
    try {
        res.send("create ")
    } catch (error) {
        
    }
})
// --- UPDATE --- 
router.put("/:id" , (req,res)=>{
    try {
        res.send("update ")
    } catch (error) {
        
    }
})
// --- DELETE --- 
router.delete("/:id" , (req,res)=>{
    try {
        res.send("delete ")
    } catch (error) {
        
    }
})
module.exports = router;