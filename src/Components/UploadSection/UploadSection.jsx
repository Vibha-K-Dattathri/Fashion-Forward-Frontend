import React, { useState, useRef } from 'react';
import './UploadSection.css';

const UploadSection = () => {
  const [gender, setGender] = useState('');
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const openCamera = () => {
    setIsCameraOpen(true);
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        const video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error('Error accessing the camera:', err);
        setErrorMessage('Unable to access the camera. Please allow camera access.');
      });
  };

  const capturePhoto = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert canvas image to file
    canvas.toBlob(
      (blob) => {
        const file = new File([blob], 'photo.jpg', { type: 'image/jpeg' });
        setImage(file);
        setIsCameraOpen(false);
        video.srcObject.getTracks().forEach((track) => track.stop());
      },
      'image/jpeg',
      1
    );
  };

  const handleFileUpload = (event) => {
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

  const handleCategoryChange = (event) => {
    const { value, checked } = event.target;
    setCategories((prevCategories) =>
      checked ? [...prevCategories, value] : prevCategories.filter((category) => category !== value)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!gender || categories.length === 0 || !image) {
      setErrorMessage('Please fill in all fields and upload/capture a valid image.');
    } else {
      alert(`Form submitted successfully! Gender: ${gender}, Categories: ${categories.join(', ')}`);
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
        </div>

        <div className="checkbox-section">
          <p>Select Categories:</p>
          <label>
            <input
              type="checkbox"
              value="tops"
              onChange={handleCategoryChange}
            />
            Tops
          </label>
          <label>
            <input
              type="checkbox"
              value="pants"
              onChange={handleCategoryChange}
            />
            Pants
          </label>
          <label>
            <input
              type="checkbox"
              value="dresses"
              onChange={handleCategoryChange}
            />
            Dresses
          </label>
          <label>
            <input
              type="checkbox"
              value="jackets"
              onChange={handleCategoryChange}
            />
            Jackets
          </label>
        </div>

        {!isCameraOpen ? (
          <div className="upload-options">
            <button type="button" className="camera-btn" onClick={openCamera}>
              📷 Open Camera
            </button>
            <div className="or-divider">or</div>
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              className="file-upload"
              onChange={handleFileUpload}
            />
            {image && <p>Photo uploaded successfully!</p>}
          </div>
        ) : (
          <div className="camera-section">
            <video ref={videoRef} className="video-preview"></video>
            <button type="button" className="capture-btn" onClick={capturePhoto}>
              Capture Photo
            </button>
          </div>
        )}

        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default UploadSection;
