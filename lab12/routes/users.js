
const express = require('express');
const router = express.Router();

// Sample user data (for demo purposes)
let users = [
  { id: 1, name: 'Nahom Birhane', email: 'nana@gmail.com' },
  { id: 2, name: 'Anna Jhon', email: 'anna@yahoo.com' },
];

// GET request for /users - Get all users
router.get('/', (req, res) => {
  res.json(users);
});

// POST request for /users - Add a new user
router.post('/', (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name: name, email: email };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
