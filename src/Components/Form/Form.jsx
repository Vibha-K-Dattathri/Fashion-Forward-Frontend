import React, { useState } from 'react';
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    color: '',
    shopName: '',
    gender: '',
    category: '',
    image: null,
    description: ''
  });
  
  const [errors, setErrors] = useState({
    color: '',
    shopName: '',
    gender: '',
    category: '',
    image: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const validate = () => {
    let formErrors = {};
    let isValid = true;

    // Validate Color (required)
    if (!formData.color) {
      formErrors.color = 'Color is required.';
      isValid = false;
    }

    // Validate Shop Name (required)
    if (!formData.shopName) {
      formErrors.shopName = 'Shop name is required.';
      isValid = false;
    }

    // Validate Gender (required)
    if (!formData.gender) {
      formErrors.gender = 'Gender is required.';
      isValid = false;
    }

    // Validate Category (required)
    if (!formData.category) {
      formErrors.category = 'Category is required.';
      isValid = false;
    }

    // Validate Image (type and size)
    if (!formData.image) {
      formErrors.image = 'Image is required.';
      isValid = false;
    } else {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
      if (!allowedTypes.includes(formData.image.type)) {
        formErrors.image = 'Only JPG, JPEG, and PNG formats are allowed.';
        isValid = false;
      } else if (formData.image.size > 5 * 1024 * 1024) { // 5MB size limit
        formErrors.image = 'Image size must be less than 5MB.';
        isValid = false;
      }
    }

    // Validate Description (required)
    if (!formData.description) {
      formErrors.description = 'Description is required.';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // If validation passes, submit form data
      console.log('Form data submitted:', formData);
      // You can send this data to your backend or perform other actions
    }
  };

  return (
    <div className="create-page-container">
      <h1>Create New Item</h1>
      <form onSubmit={handleSubmit} className="create-form">
        <div className="form-group">
          <label htmlFor="color">Color</label>
          <input
            type="text"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            className="form-control"
            required
          />
          {errors.color && <span className="error-text">{errors.color}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="shopName">Shop Name</label>
          <input
            type="text"
            id="shopName"
            name="shopName"
            value={formData.shopName}
            onChange={handleChange}
            className="form-control"
            required
          />
          {errors.shopName && <span className="error-text">{errors.shopName}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="form-control"
            required
          />
          {errors.gender && <span className="error-text">{errors.gender}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-control"
            required
          />
          {errors.category && <span className="error-text">{errors.category}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="image">Image (JPG, JPEG, PNG - Max 5MB)</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="form-control"
            required
          />
          {errors.image && <span className="error-text">{errors.image}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            rows="4"
            required
          />
          {errors.description && <span className="error-text">{errors.description}</span>}
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
