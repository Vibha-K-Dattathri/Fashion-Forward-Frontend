import React, { useEffect, useState } from 'react';
import './DisplayProducts.css';

const DisplayProducts = () => {
  // State to hold the fetched products
  const [products, setProducts] = useState([]);

  // Fetch data from backend (simulate with dummy data here)
  useEffect(() => {
    // Simulating fetching data from backend
    const fetchProducts = async () => {
      const productData = [
        { id: 1, img: 'path/to/image1.jpg', description: 'Cool T-shirt' },
        { id: 2, img: 'path/to/image2.jpg', description: 'Stylish Pants' },
        // More products...
      ];

      setProducts(productData);
    };

    fetchProducts();
  }, []);

  return (
    <div className="display-products-container">
      <h1>Products Available</h1>

      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.description} className="product-image" />
            <div className="product-info">
              <p className="product-description">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayProducts;
