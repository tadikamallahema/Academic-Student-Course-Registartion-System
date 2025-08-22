import React , { useState, useEffect }from 'react'
import axios from 'axios';
import config from '../../Config'
import NavBar from '../adminrole/NavBar';

export default function DeleteStudent() 
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
  
  const deletestudent = async (email) => {
    try {
      await axios.delete(`${config.url}/deletestudent/${email}`);
      fetchstudents();
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div style={{ textAlign: 'center' }}>
        <NavBar/>
        <h1 style={{marginTop:"-300px"}}>Student Details </h1>
        
        <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Id</th>
                <th>Year</th>
                <th>Email</th>
                <th>Action</th>
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
          <td>
          <button onClick={() => deletestudent(student.email)} className='button'>Delete</button>
        </td>
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
  )
}
