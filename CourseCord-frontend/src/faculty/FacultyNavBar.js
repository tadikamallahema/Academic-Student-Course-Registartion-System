import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUsers, faInfoCircle, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import './FacultyNavBar.css'; // Import the CSS file
import Students from './Students';
import About from './About';
import Contact from './Contact';
import Courses from './Courses';
import Profile from './Profile';

const FacultyNavBar = () => {
  // document.body.style.backgroundColor = "beige";
  return (
    <div>
      <h3 style={{marginTop:'-100px'}}>FACULTY HUB</h3>
      <nav className="navbar1">
        <ul className="navbar1-links">
          <li>
            <Link to="/courses" className="navbar1-link">
              <FontAwesomeIcon icon={faBook} /> Assigned Courses
            </Link>
          </li><br/>
          <li>
            <Link to="/students" className="navbar1-link">
              <FontAwesomeIcon icon={faUsers} /> View Students
            </Link>
          </li><br/>
          <li>
            <Link to="/about" className="navbar1-link">
              <FontAwesomeIcon icon={faInfoCircle} /> About
            </Link>
          </li><br/>
          <li>
            <Link to="/contact" className="navbar1-link">
              <FontAwesomeIcon icon={faPhone} /> Contact
            </Link>
          </li><br/>
          <li>
            
  <Link to="/profile" className="navbar1-link">
    <FontAwesomeIcon icon={faUser} /> Profile
  </Link>
</li>
        </ul>
      </nav>

      <Routes>
        <Route path="/courses/*" element={<Courses />} />
        <Route path="/students/*" element={<Students />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/contact/*" element={<Contact />} />
        <Route path="/profile/*" element={<Profile/>}/>
      </Routes>
      {/* <img src={facultyImage} alt="Faculty" style={{ borderRadius: '50',position:'fixed',top:60, left: 750, marginTop:"50px" ,height: '60%', width:'55%' }} /> */}
    </div>

  );
};

export default FacultyNavBar;