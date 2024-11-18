import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import "./AdminOptions.css";

const AdminPage = () => {
  const navigate = useNavigate();  // Hook to programmatically navigate to different pages

  return (
    <div className="admin-container">
      <button className="admin-button" onClick={() => navigate('/create')}>
        Create
      </button>
      <button className="admin-button" onClick={() => navigate('/read')}>
        Read
      </button>
      <button className="admin-button" onClick={() => navigate('/update')}>
        Update
      </button>
      <button className="admin-button" onClick={() => navigate('/delete')}>
        Delete
      </button>
    </div>
  );
};

export default AdminPage;
