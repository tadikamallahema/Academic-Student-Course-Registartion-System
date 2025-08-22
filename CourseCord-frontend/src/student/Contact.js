import React, { useState } from 'react';
import './contact.css'; 
import StudentNavBar from './StudentNavBar';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  //  const submit = () =>{
  //    window.alert("Query submitted successfully!");
  //  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert("Form submitted successfully!")
    if (!formData.name || !formData.email || !formData.message) {
      window.alert("Please enter all the details");
      return;
    }
    console.log('Form submitted:', formData);

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-us">
      <StudentNavBar/>
      <br/> <br/> <br/>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" style={{ backgroundColor: 'green', color: 'white', padding: '10px', border: 'none', borderRadius: '5px' }} >Submit</button>
      </form>
    </div>
  );
}
