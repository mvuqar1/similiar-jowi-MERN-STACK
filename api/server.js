const express=require("express");
const mongoose=require("mongoose")
const dotenv=require("dotenv")

const app=express();
dotenv.config()
const PORT=5000;

const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to mongo DB")
    }catch(error){
        console.log(error)
        throw error
    }
};

app.get("/",(req,res)=>res.send("hel"))


app.listen(PORT,()=>{
    connect()
    console.log(`Show me ${PORT}`);
});