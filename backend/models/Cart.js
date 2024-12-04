// models/cartModel.js
const mongoose = require('mongoose');

// Define the Cart Schema
const cartSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product', // Reference to the Product model
      required: true
    },
    quantity: {
      type: Number,
      default: 1,
      required: true
    },
  },
  { timestamps: true }
);

// Create a Cart model
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
