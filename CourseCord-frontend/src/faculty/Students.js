import React,{useState,useEffect} from 'react';
import FacultyNavBar from './FacultyNavBar';
import axios from "axios";
import config from '../Config';

export default function Students() 
{
  const [students, setStudents] = useState([]);

  const fetchstudents = async () => {
    try {
      const response = await axios.get(`${config.url}/viewstudents`);
      setStudents(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    fetchstudents();
  }, []);
  return (
    
      <div style={{ textAlign: 'center' }}>
        <FacultyNavBar/>
        <h1 style={{marginTop:"-300px"}} >Student Details </h1>
        
        <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Id</th>
                <th>Year</th>
                <th>Email</th>
                
              </tr>
            </thead>
             <tbody> 
         {Array.isArray(students) && students.length > 0 ? (
      students.map((student, index) => (
        <tr key={index}>
          <td>{student.fullname}</td>
          <td>{student.id}</td>
          <td>{student.year}</td>
          <td>{student.email}</td>
          
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
