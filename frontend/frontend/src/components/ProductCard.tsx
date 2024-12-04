

// ProductCard component to display each product
const ProductCard = ({ product, addToCart }: { product: { image: string; name: string; price: number }; addToCart: (product: any) => void }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
