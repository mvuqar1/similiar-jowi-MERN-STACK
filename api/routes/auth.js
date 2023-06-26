const User = require("../models/User.js")
const express = require("express")
const bcrypt = require("bcryptjs")
const router = express.Router()

// router.post("/register",async(req,res)=>{
//     try {
//         const newUser=new User(req.body);
//         await newUser.save()
//         res.status(200).json("User added succesfull")
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })
router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(200).json("User added succesfull");
    } catch (error) {
        res.status(500).json(error)
    }
})
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        !user && res.status(404).send("user not fount!")
        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password)
        if (!validPassword) {
            res.status(403).send("invalid password")
        }else{
            res.send(user)
        }
    } catch (error) {
        res.status(500).json(error)
    }
})
router.put("/update-user", async (req, res) => {
    try {
        await User.findOneAndUpdate({ _id: req.body.userId }, req.body)
        res.status(200).json("item update succesfull")
    } catch (error) {
        res.status(500).json(error)
    }
})
router.delete("/delete-user", async (req, res) => {
    try {
        await User.findOneAndDelete({ _id: req.body.usersId })
        res.status(200).json("item delete succesfull")
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router