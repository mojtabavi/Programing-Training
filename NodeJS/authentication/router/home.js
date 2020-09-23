
const _ = require('lodash');
const bcrypt = require('bcrypt');
const {User, validate} = require('./user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();


router.get('/',(req,res) => {
    res.render("index")
})

module.exports = router;
