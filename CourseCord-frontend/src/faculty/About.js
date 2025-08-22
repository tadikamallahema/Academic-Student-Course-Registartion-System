import React from 'react';
import FacultyNavBar from './FacultyNavBar';
import profile from './FacultyAbout.png';

export default function About() {
  return (
    <div>
      <h3 style={{marginTop:'-100px'}}>FACULTY HUB</h3>
      <br/><br/>
      <h3 style={{marginLeft: '20px',marginBottom:'10px',fontSize:'40px'}} align="center">About</h3><br/><br/>

      <FacultyNavBar/>
      <br/><br/><br/><br/><br/>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <img src={profile} alt="img" style={{width: '50%', height: '50%',marginLeft: '400px'}} />
        <div style={{marginLeft: '60px', marginRight: '40px', boxSizing: 'border-box', fontSize: '20px', fontWeight: '700'}}>
          <p>Tutor can contact to admin when there is an issue regarding the grievances of courses registration.</p>
          <p>This is a faculty hub where tutors can access their assigned courses, view the students registered for each course, and contact the admin for grievances regarding course registration.</p>
        </div>
      </div>
    </div>
  );
}