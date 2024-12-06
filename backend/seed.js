const mongoose = require('mongoose');
require('dotenv').config();

const Product = require('./models/Product'); // assuming Product schema is in models folder

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const products = [
      { name: 'Laptop', description: 'High performance laptop', price: 999, image: 'https://m.media-amazon.com/images/I/41uG3nvNJsL.jpg' },
      { name: 'Phone', description: 'Latest smartphone', price: 799, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL3mAGnoziq25V0SfsNoXYnMXUivjmx9KV6Q&s' },
      { name: 'Watch', description: 'Smartwatch', price: 199, image: 'https://m.media-amazon.com/images/I/81CglBHsEnL._AC_UY1000_.jpg' },
      { name: 'Headphones', description: 'Noise-canceling headphones', price: 149, image: 'https://m.media-amazon.com/images/I/41lArSiD5hL._AC_UF894,1000_QL80_.jpg' },
      { name: 'Tablet', description: 'Portable tablet', price: 299, image: 'https://www.mobilehub.co.ke/storage/2023/11/Amazon-Fire-7-Price-in-Kenya-002-Mobilehub-Kenya.jpg' },
      { name: 'Camera', description: 'Digital camera', price: 499, image: 'https://m.media-amazon.com/images/I/61JavBEclHL._AC_UF894,1000_QL80_.jpg' },
      { name: 'Gaming Console', description: 'Next-gen gaming console', price: 399, image: 'https://i.ytimg.com/vi/KT4QoYfFG1A/maxresdefault.jpg' },
      { name: 'Smart TV', description: '4K Smart TV', price: 899, image: 'https://m.media-amazon.com/images/I/418UoVylqyL._AC_.jpg' },
      { name: 'Fitness Tracker', description: 'Activity tracker', price: 79, image: 'https://m.media-amazon.com/images/I/61YXnbbNrgL._AC_UF894,1000_QL80_.jpg' },
      { name: 'Bluetooth Speaker', description: 'Portable speaker', price: 59, image: 'https://www.mobilehub.co.ke/storage/2022/11/Amazon-Alexa-Echo-Dot-4th-Gen-Smart-Speaker-Price-in-Kenya.jpg' },
      { name: 'Smart Home Hub', description: 'Control your smart devices', price: 199, image: 'https://media.wired.com/photos/590a54b49f8d2e342d8e7747/master/pass/amazon-speaker-ft.jpg' },
      { name: 'Wireless Earbuds', description: 'True wireless earbuds', price: 129, image: 'https://m.media-amazon.com/images/I/51fkoZe-K6L._AC_UF894,1000_QL80_.jpg' },
      { name: 'Robot Vacuum', description: 'Smart robot vacuum cleaner', price: 299, image: 'https://www.xiaomihomekenya.co.ke/cdn/shop/files/Mi-Robot-Vacuum-Mop-2-Lite-in-kenya-1.webp?v=1725460978&width=1946' },
      { name: 'Drone', description: 'Quadcopter drone', price: 249, image: 'https://camerastoreke.co.ke/wp-content/uploads/2022/06/Mavic-3.jpg' },
      { name: 'Smart Lock', description: 'Smart home lock', price: 149, image: 'https://i.pcmag.com/imagery/reviews/074RPdZ7tLdHibj0eV38Zuj-6.fit_lim.size_919x518.v1715110493.jpg' },
      { name: 'Wireless Charger', description: 'Fast wireless charger', price: 49, image: 'https://m.media-amazon.com/images/I/61oIAKY9s1L._AC_UF894,1000_QL80_.jpg' },
      { name: 'Portable Charger', description: 'Portable power bank', price: 29, image: 'https://m.media-amazon.com/images/I/71tsTZoDenL.jpg' },
      { name: 'Smart Thermostat', description: 'Smart home thermostat', price: 129, image: 'https://jasonvbarger.com/wp-content/uploads/2015/04/Thermostat-e1430152369552.jpg' },
      { name: 'Wireless Mouse', description: 'Wireless mouse', price: 29, image: 'https://images-na.ssl-images-amazon.com/images/I/61qpQ7ZsSmL.jpg' },
      { name: 'Wireless Keyboard', description: 'Wireless keyboard', price: 39, image: 'https://dnsl.co.ke/wp-content/uploads/2021/10/920-007146_1.jpg' },
      
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
