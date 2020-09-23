const mongoose = require('mongoose');
const users = require('./router/users');
const auth = require('./router/auth');
const bodyParser = require("body-parser");
const login = require('./router/login');
const path = require('path');
const express = require('express');
const app = express()

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/testauth')
    .then(() => console.log('Connect to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/users',users);
app.use('/api/auth',auth);
app.use('/',login);

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`))