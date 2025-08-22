import React,{ useState } from 'react'
import '../adminrole/navbar.css'
import axios from 'axios'
import config from '../../Config'
import NavBar from '../adminrole/NavBar'

export default function AddFaculty() 
{
  const [formData, setFormData] = useState({
    fullname: '',
    id: '',
    branch: '',
    designation: '',
    password:'',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const handleChange = (e) => 
  {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/insertfaculty`, formData);
      if (response.status === 200) 
      {
        setFormData({
          fullname: '',
          id: '',
          branch: '',
          designation: '',
          password:'',
        });
      }
      setMessage(response.data);
      setError('')
    } 
    catch (error) 
    {
      setError(error.response.data);
      setMessage('');
    }
  };
  
  return (
    <div>
      <NavBar/>
      <h3 align="center" style={{marginTop:"-100px"}}><u>New Faculty </u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }
      <form onSubmit={handleSubmit}>
      <div>
          <label>Full Name</label>
          <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} required />
        </div>
        <div>
          <label>Id</label>
          <input type="number" id="id" value={formData.id} onChange={handleChange} required />
        </div>
        <div>
          <label>Branch </label>
          <input type="text" id="branch" value={formData.branch} onChange={handleChange} required />
        </div>

        <div>
          <label>Designation</label>
          <input type="text" id="designation" value={formData.designation} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Add</button>
    </form>
    </div>
  )
}
