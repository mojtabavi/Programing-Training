
const Joi = require('joi');
const express = require('express');
const app = express()

app.use(express.json());

//app.get()
//app.post()
//app.put()
//app.delete()

const courses = [
    {id:1, name: 'course1'},
    {
        id: 2,
        name: 'course2'
    },
    {
        id: 3,
        name: 'course3'
    },
];

app.get('/', (req,res) => {
    res.send('HelloWorld!!!');
});


app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found')
    res.send(course);
});


app.get('/api/courses/:year/:month', (req, res) => {
    res.send(req.params);
});

app.get('/api/courses/query', (req, res) => {
    res.send(req.query);
});


app.post('/api/courses', (req, res) => {
    
    const schema = {
        name: Joi.string().min(3).required(),
    }

    Joi.validate(req.body,schema);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});


app.put('api/courses/:id', (req,res) => {
    //LookUp Course
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    // if not existing,return 404
    if (!course) res.status(404).send("The course with the given ID was not found");
    //validate
    const schema = {
      name: Joi.string().min(3).required(),
    };

    const result = Joi.validate(req.body,schema);
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    //Update Course
    course.name = req.body.name;
    //return updated course
    res.send(course);

});


app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("The course with the given ID was not found");

  const index = courses.indexOf(course);
  courses.splice(index,1);

  res.send(course);
});

const port = process.env.PORT || 3000;

app.listen(port,() => console.log(`Listening on port ${port}...`))