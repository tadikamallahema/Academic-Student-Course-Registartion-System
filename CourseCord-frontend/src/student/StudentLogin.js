import "../faculty/FacultyLogin.css";
import React, { useState} from "react";
import { useNavigate } from 'react-router-dom';
import { FaLock, FaUser } from 'react-icons/fa';
import '../faculty/FacultyLogin.png'

export default function StudentLogin() {
  document.body.style.backgroundColor="white";
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  
 
  const faculty = () => {
    const password = document.querySelector('input[type="password"]').value;

    if (!validatePassword(password)) {
        window.alert("Password is very weak,change it as soon as possible")
        navigate("/studentnavbar");
        setErrorMessage(true)
      return;
    }

    // Rest of your login logic here (e.g., navigate to facultynavbar)
    navigate("/studentnavbar");
    window.alert("Logged in Successfully!!")
  }

  const validatePassword = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[^ ]{6,}$/;
    return regex.test(password);
  }

  return (
    <div className="wrapper-container">
      
      <img src={require("../faculty/FacultyLogin.png")} alt="Background" />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className="wrapper">
        <form className="form-content">
          <h2>Student Login Page</h2>
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
          <button type="submit" onClick={faculty}>Login</button>
        </form>
      </div>
    </div>
  );
}
