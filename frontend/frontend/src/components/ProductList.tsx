import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const ProductList: React.FC<{ addToCart: (product: any) => void }> = ({ addToCart }) => {
  const [products, setProducts] = useState<any[]>([]);

  // Fetch products from the backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};
export default ProductList;
