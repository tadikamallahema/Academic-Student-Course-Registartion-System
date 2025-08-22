import React from 'react'
//import AddStudent from './AddStudent'
import { useNavigate } from 'react-router-dom'
import './navbar.css'
import NavBar from './NavBar';
export default function AdminHome() 
{
  const navigate=useNavigate();
  const navigation=()=>{
    navigate("/student")
  }
  const navigation2=()=>{
    navigate("/faculty")
  }
  // document.body.style.backgroundColor = "beige";
  return (
    <div >
      <NavBar/>
        <h3 style={{marginTop:"-100px"}}>Admin Home Page </h3><br/>
        <h3>Welcome Back Admin!!</h3>

        <button onClick={navigation} style={{padding:'15px 20px',marginLeft:'30px',marginTop:"-100px"}} >Manage Students </button>&nbsp;&nbsp;&nbsp;
        <button onClick={navigation2}style={{padding:'15px 20px'}}>Manage Faculty</button>
    </div>
  )
}
