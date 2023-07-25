import axios from 'axios';
import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./App.css";
export function Register() {
    const [inputData, setInputData] = useState({
        username: '',
        password: '',
        name:'',
        contactnumber:'',
        address:''
    })
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/users', inputData)
        .then(res => {
            alert("Registered Successfully!")
            navigate('/Login')
        })
    }
    

    return (
        <body>
        <div className="navbar">

<div className="logo">

 < a href='/' style={{color:'white',textDecoration:'none',fontFamily:'cursive'}}>

 <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Furniture</h3>

  </a>

</div>

<ul className="nav-links">

  <li>

    <a href="/">Home</a>

  </li>
  
  

  
  
</ul>


</div>
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input  onChange={(e) => setInputData({...inputData, username: e.target.value})} placeholder="Username" id="username" name="username" />
        <label htmlFor="password">Password</label>
            <input onChange={(e) => setInputData({...inputData, password: e.target.value})} type="password" placeholder="********" id="password" name="password" />
               
            <label htmlFor="name">Full name</label>
            <input  name="name" onChange={(e) => setInputData({...inputData, name: e.target.value})} id="name" placeholder="full Name" />
            <label htmlFor="contactnumber">Phone Number:</label>
           <input  type="tel" name='phone' className='form-control' placeholder="phone Number" pattern="[1-9]{1}[0-9]{9}" onChange={e => setInputData({...inputData, contactnumber: e.target.value})}/>
           <label htmlFor="address">Address</label>
            <input  name="address" onChange={(e) => setInputData({...inputData, address: e.target.value})} id="address" placeholder="Address" />
            
             <button style={{width:'70px'}}>Sign Up</button>
        </form>
        <button className="link-btn"><Link to="/Login">Already have an account? Login here.</Link></button>
    </div>
    </body>
    )
}

export default Register