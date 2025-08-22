import React from 'react';
import { useNavigate } from 'react-router-dom';
import FacultyNavBar from './FacultyNavBar';
import changePasswordImage from './changepwd.jpeg'; // Import your change password image
import logoutImage from './logout-vector-icon.jpg'; // Import your logout image

export default function Profile() {
    const navigate = useNavigate();
    const faculty = () => {
        navigate("/facultylogin")
    }
    const changepassword = () => {
        navigate("/changepwd")
    }
  return (
    <div>
      <h3 style={{ marginTop: '-100px' }}>FACULTY HUB</h3>
      <br/><br/><br/><br/>
      <h2 align='center' style={{ marginTop: '-80px' }}>My Profile</h2>
      <h3  style={{ marginTop: '-50px' }}  >Hello User!!</h3>
      <br/><br/>
      <FacultyNavBar/>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <div style={{ margin: '0 20px' }}>
          <div className="card" style={{ border: '2px solid blue' }}>
            <img src={changePasswordImage} alt="Change Password" style={{ width: '100%', height: '200px' }} />
            <div className="card-body">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={changepassword} style={{ backgroundColor: 'green', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px' }} >ChangePassword</button>
            </div>
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div style={{ margin: '0 20px' }}>
          <div className="card" style={{ border: '2px solid red' }}>
            <img src={logoutImage} alt="Logout" style={{ width: '100%', height: '200px' }} />
            <div className="card-body">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={faculty} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px' }} >Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
