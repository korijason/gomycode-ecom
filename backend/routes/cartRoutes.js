// routes/cartRoutes.js
const express = require('express');
const Cart = require('../models/cartModel');
const Product = require('../models/productModel'); // Assuming you have a Product model
const router = express.Router();

// Route to get all items in the cart
router.get('/', async (req, res) => {
  try {
    const cartItems = await Cart.find().populate('productId'); // Populating product data
    res.json(cartItems);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    res.status(500).json({ message: 'Failed to fetch cart items' });
  }
});

// Route to add an item to the cart
router.post('/', async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    // Check if the product exists
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Create a new cart item
    const newCartItem = new Cart({ productId, quantity });

    // Save the cart item to the database
    await newCartItem.save();

    res.status(201).json(newCartItem);
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ message: 'Failed to add item to cart' });
  }
});

// Route to update the quantity of an item in the cart
router.put('/:cartId', async (req, res) => {
  try {
    const { cartId } = req.params;
    const { quantity } = req.body;

    const updatedCartItem = await Cart.findByIdAndUpdate(
      cartId,
      { quantity },
      { new: true } // Return the updated cart item
    );

    if (!updatedCartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    res.json(updatedCartItem);
  } catch (error) {
    console.error('Error updating cart item:', error);
    res.status(500).json({ message: 'Failed to update cart item' });
  }
});

// Route to remove an item from the cart
router.delete('/:cartId', async (req, res) => {
  try {
    const { cartId } = req.params;

    const deletedCartItem = await Cart.findByIdAndDelete(cartId);

    if (!deletedCartItem) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    res.json({ message: 'Cart item deleted successfully' });
  } catch (error) {
    console.error('Error deleting cart item:', error);
    res.status(500).json({ message: 'Failed to delete cart item' });
  }
});

module.exports = router;
