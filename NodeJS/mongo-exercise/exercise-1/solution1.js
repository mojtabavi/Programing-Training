const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to DB...'))
.catch(err => console.error('Faild to Connect to DB...'));

const courseSchema = new mongoose.Schema({
    name: String,
        author: String,
        tags: [String],
        date: {type: Date, default: Date.now},
        isPublished: Boolean,
        price: Number
});

const Course = mongoose.model('courses',courseSchema);

async function getCourse(){
    return await Course
        .find({isPublished:true, tags:'backend'})
        .sort({name:1})
        .select({name:1,author:1})
}

async function run(){
    const courses = await getCourse();
    console.log(courses);
}

run()