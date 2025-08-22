import React from 'react';
import profile from './MainPage.jpg';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

export default function MainPage() {
  const navigate = useNavigate();

  const navigationStudent = () => {
    navigate("/studentlogin");
  }

  const navigationFaculty = () => {
    navigate("/facultylogin");
  }
  const navigationAdmin=()=>{
    navigate("/adminlogin")
  }
 
  return (
    <div className="mainpage">
      <h3 align="center">Coursecord - Academic Student Course Registration System</h3> 
      <img src={profile} alt="bgimage" />
      <div className="buttonstoken">
        <button className="button loginas">Login as</button>
        <button className="button student" onClick={navigationStudent}>Student</button>
        <button className="button faculty" onClick={navigationFaculty}>Faculty</button> {/* Call navigationFaculty onClick */}
        <button className="button admin" onClick={navigationAdmin}>Admin</button>
      </div>
    </div>
  )
}
