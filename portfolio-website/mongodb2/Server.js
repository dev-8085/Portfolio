const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = 3000;
const app = express();
const Contact = require('../src/Components/Contact');

// Connect to MongoDB
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Contact.jsx'));
}
);

app.listen(port, () => {
  console.log(`Server is running`);
});