import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { FaLock, FaUser } from 'react-icons/fa';

export default function AdminLogin() {
  document.body.style.backgroundColor = "white";
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Mock authentication (replace with your authentication logic using axios)
    if (username === 'admin' && password === 'admin') {
      // Store user data in localStorage
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('username', username);
      navigate("/adminhome");
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="wrapper-container">
      <div className="wrapper">
        <form className="form-content">
          <h2>Admin Login Page</h2>
          <div className="input-box">
            <input type="text" placeholder="Username" />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" />
            <FaLock className="icon" />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            &nbsp;&nbsp;
            <a href="/forgotpassword">Forgot password?</a>
          </div>
          <br />
          <button type="button" onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  );
}