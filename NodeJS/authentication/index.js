const mongoose = require('mongoose');
const users = require('./router/users');
const express = require('express');
const app = express()

mongoose.connect('mongodb://localhost/testauth')
    .then(() => console.log('Connect to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/users',users);

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`))