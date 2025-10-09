const express = require('express')
const router = express.Router()
const User = require('../Models/User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


router.post('/register', async(req, res) => {
    
    try {
        const {name , email , password} = req.body

        
        let user = await User.findOne({email})
        if(user) return res.status(400).json({message:"User already exists"})

        const hashedPassword = await bcrypt.hash(password, 10)
        user = new User({ name, email, password: hashedPassword})
        await user.save()

        res.json({message: "User registered Successfully"})

    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Internal Server Error"})
        
    }
     
})



router.post('/login', async(req, res) => {
    
    try {
       const {email, password} = req.body

       const user = await User.findOne({email});
       if(!user) return res.status(400).json({message:"User not found"})

       const IsMatch = await bcrypt.compare(password, user.password)
       if(!IsMatch) return res.status(400).json({message:"Invalid Credentials"})

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET , {expiresIn:'1h'}) 
        const {password: mwt , ...userData} = user._doc;

        res.json({message:"Login Successful", token, user: userData})

    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
    }
})




module.exports = router



