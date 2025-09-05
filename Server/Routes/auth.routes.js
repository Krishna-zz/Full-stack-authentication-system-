const express = require('express')
const router = express.Router()
const User = require('../Models/User.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')



router.get('/protected', (req, res) => {
    
})


router.post('/login' , (req, res) => {

})


router.post('/register' , (req, res) => {

})


router.post('/google_auth' , (req, res) => {

})



module.exports = router