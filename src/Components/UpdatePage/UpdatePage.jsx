import React, { useEffect, useState } from 'react';
import Form from './Form';
import './UpdatePage.css';

const UpdatePage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Fetching products from the backend (simulated here)
  useEffect(() => {
    const fetchProducts = async () => {
      const productData = [
        { id: 1, img: 'path/to/image1.jpg', description: 'Cool T-shirt', color: 'Red', shopName: 'Shop A', gender: 'Male', category: 'Top' },
        { id: 2, img: 'path/to/image2.jpg', description: 'Stylish Pants', color: 'Blue', shopName: 'Shop B', gender: 'Female', category: 'Bottom' },
        // More products...
      ];

      setProducts(productData);
    };

    fetchProducts();
  }, []);

  // Handle product selection
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setShowForm(true);  // Show the form when a product is selected
  };

  return (
    <div className="update-page-container">
      <h1>Update Product</h1>

      {/* Display list of products */}
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card" onClick={() => handleProductSelect(product)}>
            <img src={product.img} alt={product.description} className="product-image" />
            <div className="product-info">
              <p>{product.description}</p>
              <p><strong>Color:</strong> {product.color}</p>
              <p><strong>Shop:</strong> {product.shopName}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show Form Component if product is selected */}
      {showForm && selectedProduct && (
        <Form selectedProduct={selectedProduct} setShowForm={setShowForm} />
      )}
    </div>
  );
};

export default UpdatePage;
