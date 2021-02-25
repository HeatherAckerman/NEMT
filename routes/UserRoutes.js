const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post('/createuser', (req, res) => {
    console.log('create user');
    const { name, email } = req.body
    const newUser = new User({
        name: name,
        email: email
    })
    newUser.save((err, savedUser) => {
        if (err) return res.json(err)
        res.json(savedUser)
    })
})

module.exports = router;