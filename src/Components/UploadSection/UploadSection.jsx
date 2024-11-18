import React, { useState } from 'react';
import './UploadSection.css'; // Make sure you import the relevant CSS file

const UploadSection = () => {
  const [gender, setGender] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const validFormats = ['image/jpeg', 'image/jpg', 'image/png'];
      if (!validFormats.includes(file.type)) {
        setErrorMessage('Only jpg, jpeg, and png formats are allowed.');
        setImage(null);
      } else if (file.size > 100 * 1024 * 1024) {
        setErrorMessage('File size should not exceed 100MB.');
        setImage(null);
      } else {
        setErrorMessage('');
        setImage(file);
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!gender || !category || !image) {
      setErrorMessage('Please fill in all fields and upload a valid image.');
    } else {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="upload-page">
      <h2>Upload Your Image</h2>
      <form onSubmit={handleSubmit}>
        <div className="dropdowns">
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className="dropdown"
          >
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="dropdown"
          >
            <option value="" disabled>Select Category</option>
            <option value="tops">Tops</option>
            <option value="pants">Pants</option>
          </select>
        </div>
        <div className="upload-section">
          <input
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={handleImageChange}
            required
          />
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default UploadSection;
