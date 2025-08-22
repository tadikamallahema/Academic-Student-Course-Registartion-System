import React , { useState, useEffect } from 'react'
import '../adminrole/navbar.css'
import config from '../../Config'
import axios from 'axios';
import NavBar from '../adminrole/NavBar';

export default function RemoveCourse() {
  const [courses, setCourses] = useState([]);

  const fetchcourses = async () => {
    try {
      const response = await axios.get( `${config.url}/viewcourses`);
      setCourses(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    fetchcourses();
  }, []);
  
  const deletecourses = async (code) => {
    try {
      await axios.delete(`${config.url}/deletecourse/${code}`);
      fetchcourses();
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
      <div style={{ textAlign: 'center' }}>
        <NavBar/>
         <h1 style={{marginTop:"-300px"}}>Course Details </h1><br/> 
        
        <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Course Code </th>
                <th>Action </th>
                
              </tr>
            </thead>
             <tbody> 
         {Array.isArray(courses) && courses.length > 0 ? (
      courses.map((course, index) => (
        <tr key={index}>
          <td>{course.name}</td>
          <td>{course.code}</td>
          <td>
          <button onClick={() => deletecourses(course.code)} className='button'>Delete</button>
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
/*RemoveCourse*/