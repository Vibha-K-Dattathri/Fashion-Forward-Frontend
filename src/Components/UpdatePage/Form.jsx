import React, { useState, useEffect } from 'react';
import './Form.css';

const Form = ({ selectedProduct, setShowForm }) => {
  const [formData, setFormData] = useState({
    description: selectedProduct.description,
    color: selectedProduct.color,
    shopName: selectedProduct.shopName,
    gender: selectedProduct.gender,
    category: selectedProduct.category,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission (simulate API call for updating product)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate product update
    console.log('Product updated:', formData);

    // Close the form after submission
    setShowForm(false);
  };

  return (
    <div className="form-container">
      <h2>Update Product Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Color:</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Shop Name:</label>
          <input
            type="text"
            name="shopName"
            value={formData.shopName}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="form-field">
          <label>Category:</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="Top">Top</option>
            <option value="Bottom">Bottom</option>
          </select>
        </div>

        <button type="submit">Update Product</button>
      </form>

      <button className="close-form" onClick={() => setShowForm(false)}>
        Close
      </button>
    </div>
  );
};

export default Form;
