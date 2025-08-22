import React, { useState } from 'react';
import axios from 'axios';
import config from '../Config';
import StudentNavBar from './StudentNavBar';

export default function OptionForm() 
{


  //formData state variable is initialized with all required keys and empty values
  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    coursename: '',
    coursecode:'',
    email: '',
    contact: ''
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');
  //e means event
  const handleChange = (e) => 
  {
    // ... => spread operator which makes formData to divide into 7 fields as these fields are in single object
    //spread operator creates copy of variable by dynamically adding instead of updating key values
    setFormData({...formData, [e.target.id]: e.target.value});
    
    // It updates the state formData by adding or updating a property with a key equal to 
    //the ID of the input field 
    //that triggered the change event (e.target.id). The value of this property is 
    //set to the new value entered in that input field (e.target.value).
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/addcoursereg`, formData);
      if (response.status === 200) 
      {
        setFormData({
          fullname: '',
           gender: '',
           coursename: '',
           coursecode: '',
           email: '',
           contact: ''
        });
      }
      setMessage(response.data);
      setError('') // set error to ""
    } 
    catch (error) 
    {
      setError(error.response.data);
      setMessage(''); //set message to ""
    }
  };
  
  return (
    <div>
        <StudentNavBar/> <br/><br/><br/><br/> <br/><br/><br/><br/>
        <br/><br/><br/><br/>
      <h3 align="center" style={{marginTop:"-135px"}}><u>Course Registration</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }

      <form >
        <div>
          <label>Full Name</label>
          {/* handlechange is an event triggered whenever we enter name */}
          <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} required />
        </div>
        <div>
          <label>Gender</label>
          <select id="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div>
        <label>Course Name</label>
          {/* handlechange is an event triggered whenever we enter name */}
          <input type="text" id="coursename" value={formData.course} onChange={handleChange} required />
        </div>
        <div>
        <label>Course Code</label>
          {/* handlechange is an event triggered whenever we enter name */}
          <input type="text" id="coursecode" value={formData.course} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
    <label>Contact</label>
    <input type="text" id="contact" value={formData.contact} pattern="[6789][0-9]{9}" placeholder="MUST be 10 Digits" onChange={handleChange} required />
</div>
        <button type="submit" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
}