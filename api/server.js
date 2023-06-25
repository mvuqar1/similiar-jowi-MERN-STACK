const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()




const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to mongo DB")
    }catch(error){
        console.log(error)
        throw error
    }
};




const PORT=5000;
const express=require("express");
const app=express();
const cors=require("cors")

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>res.send("hello"))

//routes
const categoryRoute=require("./routes/categories.js")
const productRoute=require("./routes/products.js")
const billRoute=require("./routes/bills.js")


app.use("/api/categories",categoryRoute)
app.use("/api/product",productRoute)
app.use("/api/bill",billRoute)


app.listen(PORT,()=>{
    connect()
    console.log(`Show me ${PORT}`);
});