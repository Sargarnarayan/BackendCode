const joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'course1', email:'abc@gmail.com', phoneNo:8955421156, city:'pune', offers:'mobile'},
    { id: 2, name: 'course2', email:'abc@gmail.com', phoneNo:8955421156, city:'pune', offers:'android'},
    { id: 3, name: 'course3', email:'abc@gmail.com', phoneNo:8955421156, city:'pune', offers:'mobile'}
];


app.get('/', (req, res) => {
    res.send('hello express');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});


app.post('/api/courses', (req, res) => {
    const schema = {
        name: joi.string().min(3).required(),
        email: joi.any().required(),
        phoneNo: joi.any().required(),
        city: joi.any().required(),
        offers:joi.any().required()
    };
    const result = joi.validate(req.body, schema);
    console.log(result);

    if (result.error) {
        return res.status(400).send(result.error.details[0].message);
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        city: req.body.city,
        offers: req.body.offers
    };
    courses.push(course);
    res.send(course);
});


app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course)  return res.status(404).send('This Course Or Id Not Found');
    
    const schema = {
        name: joi.string().min(3).required(),
        email: joi.any().required(),
        phoneNo: joi.any().required(),
        city: joi.any().required(),
        offers: joi.any().required()
    };
    const result = joi.validate(req.body, schema);
    course.name = req.body.name;
    course.email = req.body.email;
    course.phoneNo = req.body.phoneNo;
    course.city = req.body.city;
    course.offers = req.body.offers;
    res.send(course);
});


app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('This Course Or Id Not Found');
    //delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('This Course Or Id Not Found');
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`lisen on port ${port}...`));