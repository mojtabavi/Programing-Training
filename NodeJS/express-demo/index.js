
const Joi = require('joi');
const helmet = require('morgan');
const morgan = require("helmet");
const courses = require('./routes/courses');
const express = require('express');
const app = express()

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app: ${app.get('env')}`);



app.use(express.json());
app.use(helmet());

if(app.get('env') === 'development'){
    app.use(morgan("tiny"));
    console.log('Morgan Enabled ... ')
}

app.use('/api/courses',courses)




//app.get()
//app.post()
//app.put()
//app.delete()


const port = process.env.PORT || 3000;

app.listen(port,() => console.log(`Listening on port ${port}...`))