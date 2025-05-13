// importing express
const express = require('express');

// creating app
const app = express();

// adding comunication routing
// retreive
app.get('/', (req, res) => {
    console.log('GET - Request received...');
    res.send('GET - Response sended!');
});

app.post('/', (req, res) => {
    res.send('Got a POST request');
});

app.put('/user', (req, res) => {
    res.send('Got a PUT request at /user');
});

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user');
});


// execting app
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server raunnig at http://localhost:${PORT}/`);
});