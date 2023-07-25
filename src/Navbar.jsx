import React from 'react';

import './Navbar.css';
import sofa from './sofa.jpg';



export const Navbar = () => {
  

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
        <li>

      <a href="/Home">Log In</a>

      </li>
        

        
        
      </ul>
      
      
    </div>
     
        <img src={sofa} width="1280" height="525"/>
      
    </body>

  );

};




export default Navbar;