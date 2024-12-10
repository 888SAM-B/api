const express = require('express');
const app = express();

// Middleware
app.use(express.json()); // Parses JSON requests

// Sample data
let courses = [
    { id: 1, name: "Python Basics" },
    { id: 2, name: "Python Basics" },
    { id: 3, name: "Python Basics" },
    { id: 4, name: "Python Basics" },
    { id: 5, name: "Python Basics" },
    { id: 6, name: "Python Basics" },
    { id: 7, name: "Python Basics" },
    { id: 8, name: "Python Basics" },
    { id: 9, name: "Python Basics" },
    { id: 10, name: "Python Basics" },
    { id: 11, name: "Python Basics" },
    { id: 12, name: "Python Basics" },
    { id: 13, name: "Python Basics" },
    { id: 14, name: "Python Basics" },
    { id: 15, name: "Python Basics" },
    { id: 16, name: "JavaScript Advanced" },
];

// Endpoints
app.get('/courses', (req, res) => {
    res.send(courses);
});



// Start the server
app.listen(3000, () => console.log('API running on http://localhost:3000'));
