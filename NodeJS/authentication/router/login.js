const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {User, validate} = require('./user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.render("index")
});



router.post('/login', async (req,res) =>{

    const {email,password} = req.body
    console.log(email)
    let userFind = await User.findOne({ email: email });
    if(!userFind) return res.status(400).send('Invalid email or password');

    const validPassword = await bcrypt.compare(password,userFind.password);
    if (!validPassword) return res.status(400).send('Invalid email or password')


    res.render("succeslogin",{name:userFind.name});

});


module.exports = router;