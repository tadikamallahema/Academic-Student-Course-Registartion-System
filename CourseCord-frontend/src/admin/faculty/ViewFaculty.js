import React , { useState, useEffect } from 'react'
import axios from 'axios';
import config from '../../Config'
import NavBar from '../adminrole/NavBar';

export default function ViewFaculty()
 {
  const [faculty, setFaculty] = useState([]);

  const fetchfaculty = async () => {
    try {
      const response = await axios.get(`${config.url}/viewfaculty`);
      setFaculty(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    fetchfaculty();
  }, []);
  
  
  return (
      <div style={{ textAlign: 'center' }}>
        <NavBar/>
        <h1 style={{marginTop:"-300px"}}>Faculty Details </h1><br/>
        
        <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Id</th>
                <th>Branch</th>
                <th>Designation</th>
                
              </tr>
            </thead>
             <tbody> 
         {Array.isArray(faculty) && faculty.length > 0 ? (
      faculty.map((faculty, index) => (
        <tr key={index}>
          <td>{faculty.fullname}</td>
          <td>{faculty.id}</td>
          <td>{faculty.branch}</td>
          <td>{faculty.designation}</td>
          
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="4">Data Not Found</td>
      </tr>
    )}
  </tbody>
          </table> 
      </div>
    );
}