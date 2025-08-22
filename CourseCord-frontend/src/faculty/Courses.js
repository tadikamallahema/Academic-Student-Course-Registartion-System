import React from 'react'
import FacultyNavBar from './FacultyNavBar'
import './FacultyNavBar.css'
export default function Courses() {
  const courses = [
    "DEVOPS",
    "ASE",
    "CIS",
    "ML"

]
  return (
    <div>
      <h3 style={{marginTop:'-100px'}}>FACULTY HUB</h3>
      <br/><br/>
        <h2 align='center' style={{marginTop:'-280px'}}>Assigned Courses</h2><br/><br/>
        <FacultyNavBar/>
        <div className="button" style={{marginLeft:'450px'}}>
        {courses.map(course => (
          <button className='subject' key={course} style={{ 
            width: '250px',
            alignContent:'flex-end',
            transitionDuration: '0.4s',
            padding: '15px 32px',
            border: '2px solid #c2e9f7',
            borderRadius: '12px',
            fontSize: '16px',
            backgroundColor: 'transparent',
            color: '#000',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2cab81'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >{course}</button> 
        ))} 
        </div>
    </div>
  )
}