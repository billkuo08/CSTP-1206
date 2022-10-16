const express = require('express');

const app = express();
const PORT = 4000;
const employeesArr = [];

// Telling express that the data i am getting is of type JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to Employees APIs!");
})

// We are trying to get students data from the server
app.get('/employees', (req, res) => {
    // For get requests we give 200 success response
    // const data = res.status(200);
    // return data.json(student);

    return res.status(200).json(employeesArr);
})

// We are trying to post students data to the server
app.post('/employees', (req, res) => {
    const employeesData = req.body;
    employeesArr.push(employeesData);

    // 201 is used when you are trying to create a resource and send sucess response
    return res.status(201).json(employeesArr);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})