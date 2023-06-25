const Bills=require("../models/Bill.js")
const express=require("express")
const router=express.Router()


router.get("/get-all",async(req,res)=>{
    try {
        const bill=await Bills.find();
        res.send(bill)   
    } catch (error) {
        console.log(error)
    }
})

router.post("/add-bill",async(req,res)=>{
    try {
        const bill=new Bills(req.body);
        await bill.save()
        res.status(200).json("item added succesfull")
    } catch (error) {
        res.status(400).json(error)
    }
})
router.put("/update-bill",async(req,res)=>{
    try {
        await Bills.findOneAndUpdate({_id:req.body.billId},req.body)
        res.status(200).json("item update succesfull")
    } catch (error) {
        res.status(400).json(error)
    }
})
router.delete("/delete-bill",async(req,res)=>{
    try {
        await Bills.findOneAndDelete({_id:req.body.billId})
        res.status(200).json("item delete succesfull")
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports=router