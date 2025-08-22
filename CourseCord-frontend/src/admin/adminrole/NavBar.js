import React from 'react';
import { Routes, Link, Route,useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faChalkboardTeacher, faBook } from '@fortawesome/free-solid-svg-icons';
import AdminHome from './AdminHome';
import AddStudent from '../student/AddStudent';
import DeleteStudent from '../student/DeleteStudent';
import ViewStudents from '../student/ViewStudents';
import AddFaculty from '../faculty/AddFaculty';
import RemoveFaculty from '../faculty/RemoveFaculty';
import ViewFaculty from '../faculty/ViewFaculty';
import AddCourse from '../courses/AddCourse';
import ViewCourse from '../courses/ViewCourse';
import RemoveCourse from '../courses/RemoveCourse';
import './navbar.css';
import AdminLogin from './AdminLogin';

export default function NavBar({ onAdminLogin }) {
  const navigate=useNavigate();
  const handlelogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/adminlogin')
    window.location.reload()
  }

  return (
    <div>
      <ul className='navbar'>
        <li><Link to="/adminhome"><FontAwesomeIcon icon={faHome} /> AdminHome</Link></li>
        <li className="dropdown">
          <Link><FontAwesomeIcon icon={faUser} /> Student</Link>
          <div className="dropdown1-content">
            <Link to="/addstudent">AddStudent</Link>
            <Link to="/viewstudents">ViewStudents</Link>
            <Link to="/removestudent">RemoveStudent</Link>
          </div>
        </li>
        <li className="dropdown">
          <Link><FontAwesomeIcon icon={faChalkboardTeacher} /> Faculty</Link>
          <div className="dropdown2-content">
            <Link to="/addfaculty">AddFaculty</Link>
            <Link to="/viewfaculty">ViewFaculty</Link>
            <Link to="/removefaculty">RemoveFaculty</Link>
          </div>
        </li>
        <li className="dropdown">
          <Link><FontAwesomeIcon icon={faBook} /> Course</Link>
          <div className="dropdown3-content">
            <Link to="/addcourse">AddCourse</Link>
            <Link to="/viewcourse">ViewCourse</Link>
            <Link to="/removecourse">RemoveCourse</Link>
          </div>
        </li>
        <br/>
        <li><button className="logoutButton" onClick={handlelogout} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Logout</button></li>
      </ul>

      <Routes>
        <Route path="/adminlogin" element={<AdminLogin onAdminLogin={onAdminLogin} />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/viewstudents" element={<ViewStudents />} />
        <Route path="/removestudent" element={<DeleteStudent />} />
        <Route path='/addfaculty' element={<AddFaculty />} />
        <Route path='/viewfaculty' element={<ViewFaculty />} />
        <Route path='/removefaculty' element={<RemoveFaculty />} />
        {/*Course routes */}
        <Route path='/addcourse' element={<AddCourse />} />
        <Route path='/viewcourse' element={<ViewCourse />} />
        <Route path='/removecourse' element={<RemoveCourse />} />
      </Routes>
    </div>
  )
}
