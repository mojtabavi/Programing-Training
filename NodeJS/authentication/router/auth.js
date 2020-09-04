const _ = require('lodash');
const bcrypt = require('bcrypt');
const {User, validate} = require('./user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();



router.post('/', async (req,res) =>{
    /*    const {error} = validate(req.body);
        if (error) return res.status(400).send(error.detail[0].message);*/
    let userFind = await User.findOne({ email: req.body.email });
    if(!userFind) return res.status(400).send('Invalid email or password');

    const validPassword = await bcrypt.compare(req.body.password,userFind.password);
    if (!validPassword) return res.status(400).send('Invalid email or password')

    res.status(200).send(true);

})

router.get('/hello',(req,res) => {
    res.send('Hello')
})

module.exports = router;