const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const Contact = require('./models/Contact');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.post('/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);

    await newContact.save();

    res.status(201).json({
      message: 'Message Saved Successfully',
    });
  } catch (error) {
    res.status(500).json({
      error: 'Server Error',
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});