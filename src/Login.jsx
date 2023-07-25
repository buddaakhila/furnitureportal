import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./App.css";

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
 const validatingUsernameAndPassword = (username, pass) => {
        // Fetch the user data from the JSON database
        const usersData = require('./db1.json');
     
        // Check if the entered username and password match any user in the database
        const userExists = usersData.users.some(
          (user) => user.username === username && user.password === pass
        );
     
        return userExists;
      };
      const [isLoggedIn, setMessage] = useState(false); // Track login status

      const handleSubmit = (e) => {
        e.preventDefault();
     
        if (validatingUsernameAndPassword(username, pass)) {
           setMessage(true); // Set login status to true
          // Proceed with further actions
        } else {
          alert('Invalid credentials!');
          // Display an error message or take appropriate action
        }
      };
      if (isLoggedIn) {
        window.location.href='/Products';
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
            <h2>User Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" id="username" name="username" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"  />
                <button type="submit" style={{width:'60px'}}>Log In</button>
            </form>
            <button className="link-btn"><Link to="/Register" style={{textDecoration:'none'}}>Don't have an account? Register here.</Link></button>
        </div>
        </body>
    )
}