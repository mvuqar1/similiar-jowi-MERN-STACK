const Users=require("../models/User.js")
const express=require("express")
const router=express.Router()

//get all user
router.get("/get-all",async(req,res)=>{
    try {
        const users=await Users.find();
        res.send(users)   
    } catch (error) {
        console.log(error)
    }
})

//get only one user
router.post("/",async(req,res)=>{
    const userId=req.body.userId
    try {
        const user=await Users.findById(userId);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports=router