const express = require('express');
const app = express();

// Middleware
app.use(express.json()); // Parses JSON requests

// Sample data
let courses =[
  {
    "id": 1,
    "module": "Introduction to Python",
    "title": "What is Python?",
    "content": "Python is a high-level, interpreted programming language known for its simplicity and versatility."
  },
  {
    "id": 2,
    "module": "Introduction to Python",
    "title": "Installing Python",
    "content": "Step-by-step guide to installing Python on Windows, Mac, and Linux."
  },
  {
    "id": 3,
    "module": "Introduction to Python",
    "title": "Your First Python Program",
    "content": "Learn how to write and run your first Python script using the print() function."
  },
  {
    "id": 4,
    "module": "Core Python Concepts",
    "title": "Variables and Data Types",
    "content": "Understand variables, constants, and Python's dynamic typing system."
  },
  {
    "id": 5,
    "module": "Core Python Concepts",
    "title": "Control Flow",
    "content": "Learn about conditional statements like if, elif, and else."
  },
  {
    "id": 6,
    "module": "Core Python Concepts",
    "title": "Loops",
    "content": "Master for loops, while loops, and loop control statements (break, continue)."
  },
  {
    "id": 7,
    "module": "Core Python Concepts",
    "title": "Functions",
    "content": "Learn to define and use functions for reusable code."
  },
  {
    "id": 8,
    "module": "Intermediate Python",
    "title": "Object-Oriented Programming (OOP)",
    "content": "Learn about classes, objects, inheritance, and encapsulation."
  },
  {
    "id": 9,
    "module": "Intermediate Python",
    "title": "Modules and Packages",
    "content": "Discover how to organize your code with modules and packages."
  },
  {
    "id": 10,
    "module": "Intermediate Python",
    "title": "File Handling",
    "content": "Learn to read from and write to files in Python."
  },
  {
    "id": 11,
    "module": "Advanced Python",
    "title": "Error and Exception Handling",
    "content": "Handle runtime errors gracefully using try-except blocks."
  },
  {
    "id": 12,
    "module": "Advanced Python",
    "title": "Data Structures",
    "content": "Understand lists, tuples, sets, and dictionaries in depth."
  },
  {
    "id": 13,
    "module": "Advanced Python",
    "title": "Working with APIs",
    "content": "Learn to interact with web services using requests."
  },
  {
    "id": 14,
    "module": "Advanced Python",
    "title": "Web Development with Flask",
    "content": "An introduction to building web applications using Flask."
  },
  {
    "id": 15,
    "module": "Projects and Practice",
    "title": "Mini Project: Calculator",
    "content": "Build a simple calculator using Python."
  },
  {
    "id": 16,
    "module": "Projects and Practice",
    "title": "Mini Project: To-Do List App",
    "content": "Create a basic command-line to-do list application."
  },
  {
    "id": 17,
    "module": "Projects and Practice",
    "title": "Capstone Project: Build a REST API",
    "content": "Use Flask to create a RESTful API for managing tasks."
  }
];

// Endpoints
app.get('/python', (req, res) => {
    res.send(courses);
});

// Start the server
app.listen(3000, () => console.log('API running on http://localhost:3000'));
