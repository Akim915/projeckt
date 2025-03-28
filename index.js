const express = require('express');
const { console } = require('inspector');
const app = express();

app.get('/', (reg, res) => {
    res.send('Hello World');
});
app.get('/grades/:student_id', (req, res) => {
    const studentID = req.params.student_id;
    console.log("Student ID:", student_id);
});
app.post('/grades/:student_id')
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
    