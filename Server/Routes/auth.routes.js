const express = require('express')
const router = express.Router()
const User = require('../Models/User.model')
const bcrypt = require('bcrypt')


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



router.post('/login', (req, res) => {
    

})




module.exports = router



