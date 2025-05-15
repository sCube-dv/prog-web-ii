// importing express
const express = require('express');

// creating app - express instance
const app = express();

// adding middleware to analyze incoming requests in JSON format
app.use(express.json());

// creating a list of students
const students = [
    { id: 1, name: 'Sam Wilson', age: 20, enrolled: true },
    { id: 2, name: 'Jane Smith', age: 22, enrolled: true },
    { id: 3, name: 'Sam Brown', age: 19, enrolled: true },
    { id: 4, name: 'Suzan West', age: 27, enrolled: true },
    { id: 5, name: 'Jaden Snowen', age: 25, enrolled: true }
];

// adding comunication routing

/* CRUD */

app.get('/', (req, res) => {
    res.send('NodeJS API Working!');
});
// READ
/* route to return all students */
app.get('/api/students', (req, res) => {
    res.send(students);
});

/* route to return a student by id */
app.get('/api/students/:id', (req, res) => {
    /* locale a student in list of students by id */
    const student = students.find(s => s.id === parseInt(req.params.id));

    /* if student not found, return 404 */
    /* if student found, return the student */
    if (!student) return res.status(404).send('Student not found!');
    res.send(student);
});

// CREATE
/* route to create a new student */
app.post('/api/students', (req, res) => {
    /* create a new student */
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        enrolled: req.body.enrolled
    };
    /* add the new student to the list of students */
    students.push(student);
    /* return the new student */
    res.send(student);
});

// UPDATE
/* route to update a student */
app.put('/api/students/:id', (req, res) => {
    /* locale a student in list of students by id */
    const student = students.find(s => s.id === parseInt(req.params.id));

    /* if student not found, return 404 */
    /* if student found, update the student */
    if (!student) return res.status(404).send('Student not found!');

    /* update the student */
    student.name = req.body.name || student.name;
    student.age = req.body.age !== undefined ? parseInt(req.body.age) : student.age;
    student.enrolled = req.body.enrolled !== undefined ? req.body.enrolled === 'true' : student.enrolled;

    /* return the updated student */
    res.send(student);
});

// DELETE
/* route to delete a student */
app.delete('/api/students/:id', (req, res) => {
    /* locale a student in list of students by id */
    const student = students.find(s => s.id === parseInt(req.params.id));

    /* if student not found, return 404 */
    /* if student found, delete the student */
    if (!student) return res.status(404).send('Student not found!');

    /* delete the student */
    const index = students.indexOf(student);
    students.splice(index, 1);

    /* return the deleted student */
    res.send(student);
});




// execting app
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server raunnig at http://localhost:${PORT}/`);
});