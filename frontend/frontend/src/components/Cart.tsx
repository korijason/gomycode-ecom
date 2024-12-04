import React from 'react';

const Cart: React.FC<{ cartItems: Array<{ image: string; name: string; price: number }> }> = ({ cartItems }) => {
  const handleCheckout = async () => {
    try {
      // Send cart data to backend for checkout (optional, you could use a POST request here)
      const response = await fetch('http://localhost:5000/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItems),
      });
      const data = await response.json();
      console.log('Cart after checkout:', data);
    } catch (error) {
      console.error('Error checking out:', error);
    }
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>${item.price}</p>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
