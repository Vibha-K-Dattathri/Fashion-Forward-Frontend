// JavaScript
import React, { useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    if (!isLogin && name.trim() === '') newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!password.trim()) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters long';
    if (!isLogin && !role) newErrors.role = 'Role is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validateForm()) {
      alert(isLogin ? 'Logged in successfully!' : 'Signed up successfully!');
      setName('');
      setEmail('');
      setPassword('');
      setRole('');
      setErrors({});
    }
  };

  return (
    <div className='loginsignup'>
      <div className={`loginsignup-container ${isLogin ? 'login' : 'signup'}`}>
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <div className="loginsignup-fields">
          {!isLogin && (
            <div>
              <input 
                type="text" 
                placeholder='Your Name' 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
          )}
          <div>
            <input 
              type="email" 
              placeholder='Email Address' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <input 
              type="password" 
              placeholder='Password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          {!isLogin && (
            <div>
              <select 
                value={role} 
                onChange={(e) => setRole(e.target.value)} 
                className="loginsignup-select"
              >
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
              {errors.role && <p className="error">{errors.role}</p>}
            </div>
          )}
        </div>
        <button onClick={handleSubmit}>{isLogin ? 'Login' : 'Continue'}</button>
        <p className='loginsignup-login'>
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <span onClick={() => setIsLogin(!isLogin)} style={{ cursor: 'pointer' }}>
            {isLogin ? 'Sign up here' : 'Login here'}
          </span>
        </p>
        {!isLogin && (
          <div className="loginsignup-agree">
            <input type="checkbox" name='agreement' id='agreement' />
            <label htmlFor="agreement">By continuing, I agree to the terms of use & privacy policy.</label>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
