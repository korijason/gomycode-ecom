const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Define a Product schema
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
});

const Product = mongoose.model('Product', productSchema);

// Route to get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).send('Error retrieving products');
  }
});

// Define a cart schema
const cartSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
  });
  
  const Cart = mongoose.model('Cart', cartSchema);
  
  // Route to get all products
  app.get('/api/cart', async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(500).send('Error retrieving cart');
    }
  });


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
