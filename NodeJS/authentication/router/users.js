const _ = require('lodash');
const {User, validate} = require('./user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();



router.post('/', async (req,res) =>{
/*    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.detail[0].message);*/

    /*let user = await User.findOne({ email: req.body.email });
    if(user) return res.status(400).send('User aleardy registered.');*/
    let user = new User(_.pick(req.body,['name','email','password']));

    await user.save();

    res.status(200).send(_.pick(user,['_id','name','email']));

})

router.get('/hello',(req,res) => {
    res.send('Hello')
})

module.exports = router;