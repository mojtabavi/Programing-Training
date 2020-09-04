const {User, validate} = require('./user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

async function createUser(name,email,password){
    let user = new User({
        name:name,
        email:email,
        password:password
    });

    await  user.save();
    return user;
}


router.post('/', (req,res) =>{
/*    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.detail[0].message);*/

    /*let user = await User.findOne({ email: req.body.email });
    if(user) return res.status(400).send('User aleardy registered.');*/

    createUser(req.body.name,req.body.email,req.body.password)
        .catch(error => console.error(error))
    res.status(200).send({'status':'ok'});

})

router.get('/hello',(req,res) => {
    res.send('Hello')
})

module.exports = router;