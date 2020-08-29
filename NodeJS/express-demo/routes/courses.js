const express = require('express');
const router = express.Router();


const courses = [{
        id: 1,
        name: 'course1'
    },
    {
        id: 2,
        name: 'course2'
    },
    {
        id: 3,
        name: 'course3'
    },
];



router.get('/', (req, res) => {
    res.send(courses);
});

router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found')
    res.send(course);
});


router.get('/:year/:month', (req, res) => {
    res.send(req.params);
});

router.get('/query', (req, res) => {
    res.send(req.query);
});


router.post('/', (req, res) => {

    const schema = {
        name: Joi.string().min(3).required(),
    }

    Joi.validate(req.body, schema);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});


router.put('/:id', (req, res) => {
    //LookUp Course
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    // if not existing,return 404
    if (!course) res.status(404).send("The course with the given ID was not found");
    //validate
    const schema = {
        name: Joi.string().min(3).required(),
    };

    const result = Joi.validate(req.body, schema);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    //Update Course
    course.name = req.body.name;
    //return updated course
    res.send(course);

});


router.delete("/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send("The course with the given ID was not found");

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});


module.exports = router;