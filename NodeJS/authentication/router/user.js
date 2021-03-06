const Joi = require('joi');
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
        minlength:2,
        maxlength:50,
    },
    email: {
        type: String,
        require: true,
        minlength: 5,
        maxlength: 255,
        unique:true
    },
    password: {
        type: String,
        require: true,
        minlength:5,
        maxlength:1024
    }
    });


const User = mongoose.model('user',schema);

/*function  validateUser(user){
    const Schema = {
        name:Joi.string().min(5).max(255).required(),
        email:Joi.string().min(5).max(5).required(),
        password:Joi.string().min(5).max(1024).required()
    };

    return Joi.validate(user, Schema)


}*/


module.exports = {User}