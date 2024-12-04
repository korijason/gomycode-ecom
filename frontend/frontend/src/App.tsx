import  { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({cart.length})</Link>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              <h1>Products</h1>
              <ProductList addToCart={addToCart} />
            </>
          } />
          <Route path="/cart" element={<Cart cartItems={cart} />} />
        </Routes>
      </div>
    </Router>
  );
}export default App;
