const Products=require("../models/Products.js")
const express=require("express")
const router=express.Router()


router.get("/get-all",async(req,res)=>{
    try {
        const product=await Products.find();
        res.send(product)   
    } catch (error) {
        console.log(error)
    }
})

router.post("/add-product",async(req,res)=>{
    try {
        const newProduct=new Products(req.body);
        await newProduct.save()
        res.status(200).json("item added succesfull")
    } catch (error) {
        res.status(400).json(error)
    }
})
router.put("/update-product",async(req,res)=>{
    try {
        await Products.findOneAndUpdate({_id:req.body.productId},req.body)
        res.status(200).json("item update succesfull")
    } catch (error) {
        res.status(400).json(error)
    }
})
router.delete("/delete-product",async(req,res)=>{
    try {
        await Products.findOneAndDelete({_id:req.body.productId})
        res.status(200).json("item delete succesfull")
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports=router