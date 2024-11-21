import React, { useEffect, useState } from 'react';
import './DeletePage.css';

const DeletePage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

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
    setShowDeleteConfirmation(true);  // Show the delete confirmation when a product is selected
  };

  // Handle product deletion (simulated API call)
  const handleDelete = async () => {
    if (!selectedProduct) return;

    // Simulate deleting the product from the backend
    console.log('Product deleted:', selectedProduct.id);

    // Show success prompt
    alert('Product deleted successfully');

    // Remove the deleted product from the local state
    setProducts(products.filter(product => product.id !== selectedProduct.id));

    // Hide the delete confirmation
    setShowDeleteConfirmation(false);
    setSelectedProduct(null);
  };

  return (
    <div className="delete-page-container">
      <h1>Delete Product</h1>

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

      {/* Show delete confirmation */}
      {showDeleteConfirmation && selectedProduct && (
        <div className="delete-confirmation">
          <h3>Are you sure you want to delete this product?</h3>
          <button onClick={handleDelete} className="delete-button">Delete</button>
          <button onClick={() => setShowDeleteConfirmation(false)} className="cancel-button">Cancel</button>
        </div>
      )}
    </div>
  );
};

export default DeletePage;
