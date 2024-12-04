const mongoose = require('mongoose');
require('dotenv').config();

const Product = require('./models/Product'); // assuming Product schema is in models folder

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const products = [
      { name: 'Laptop', description: 'High performance laptop', price: 999, image: 'https://via.placeholder.com/150' },
      { name: 'Phone', description: 'Latest smartphone', price: 799, image: 'https://via.placeholder.com/150' },
      { name: 'Watch', description: 'Smartwatch', price: 199, image: 'https://via.placeholder.com/150' },
      { name: 'Headphones', description: 'Noise-canceling headphones', price: 149, image: 'https://via.placeholder.com/150' },
      { name: 'Tablet', description: 'Portable tablet', price: 299, image: 'https://via.placeholder.com/150' },
      { name: 'Camera', description: 'Digital camera', price: 499, image: 'https://via.placeholder.com/150' },
      { name: 'Gaming Console', description: 'Next-gen gaming console', price: 399, image: 'https://via.placeholder.com/150' },
      { name: 'Smart TV', description: '4K Smart TV', price: 899, image: 'https://via.placeholder.com/150' },
      { name: 'Fitness Tracker', description: 'Activity tracker', price: 79, image: 'https://via.placeholder.com/150' },
      { name: 'Bluetooth Speaker', description: 'Portable speaker', price: 59, image: 'https://via.placeholder.com/150' },
      { name: 'Smart Home Hub', description: 'Control your smart devices', price: 199, image: 'https://via.placeholder.com/150' },
      { name: 'Wireless Earbuds', description: 'True wireless earbuds', price: 129, image: 'https://via.placeholder.com/150' },
      { name: 'Robot Vacuum', description: 'Smart robot vacuum cleaner', price: 299, image: 'https://via.placeholder.com/150' },
      { name: 'Drone', description: 'Quadcopter drone', price: 249, image: 'https://via.placeholder.com/150' },
      { name: 'Smart Lock', description: 'Smart home lock', price: 149, image: 'https://via.placeholder.com/150' },
      { name: 'Wireless Charger', description: 'Fast wireless charger', price: 49, image: 'https://via.placeholder.com/150' },
      { name: 'Portable Charger', description: 'Portable power bank', price: 29, image: 'https://via.placeholder.com/150' },
      { name: 'Smart Thermostat', description: 'Smart home thermostat', price: 129, image: 'https://via.placeholder.com/150' },
      { name: 'Wireless Mouse', description: 'Wireless mouse', price: 29, image: 'https://www.logitech.com/assets/65221/62/keyboard-mk270-image.jpg' },
      { name: 'Wireless Keyboard', description: 'Wireless keyboard', price: 39, image: 'https://www.logitech.com/assets/65477/62/m325-wireless-mouse-image.jpg' },
      
      // Add more products as needed
    ];
    Product.insertMany(products)
      .then(() => {
        console.log('Products added!');
        mongoose.connection.close();
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
