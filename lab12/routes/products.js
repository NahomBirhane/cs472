
const express = require('express');
const router = express.Router();

// Sample product data (for demo purposes)
let products = [
  { id: 101, name: 'Lenovo Laptop', price: 1250 },
  { id: 201, name: 'iPhone 14 Pro', price: 1200 },
];

// GET request for /products - Get all products
router.get('/', (req, res) => {
  res.json(products);
});

// POST request for /products - Add a new product
router.post('/', (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: products.length + 1, name:name, price: price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;
