import React, { useEffect, useState } from 'react'
import axios from 'axios';
import config from '../Config';
import StudentNavBar from './StudentNavBar';

export default function CoursesView() {
    
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
  
//   const viewcourse = async (email) => {
//     try {
//       await axios.get(`${config.url}/removestudents/${email}`);
//       fetchcourses();
//     } catch (error) {
//       console.error(error.message);
//     }
//   }
  return (
      <div style={{ textAlign: 'center' }}>
        <StudentNavBar/>
        <h1 style={{marginTop:"-250px"}} >Course Details </h1>
        
        <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Course Code </th>
                
              </tr>
            </thead>
             <tbody> 
         {Array.isArray(courses) && courses.length > 0 ? (
      courses.map((course, index) => (
        <tr key={index}>
          <td>{course.name}</td>
          <td>{course.code}</td>
          
          
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="2">Data Not Found</td>
      </tr>
    )}
  </tbody>
          </table> 
      </div>
  )
}
/*View Course*/