import React from "react";
import { Link } from "react-router-dom";
import thank from "./thank.jpg"
export const Final=()=>{
    return(
        <body>

<div className="navbar">

<div className="logo">

 < a href='/' style={{color:'white',textDecoration:'none',fontFamily:'cursive'}}>

 <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Furniture</h3>

  </a>

</div>

<ul className="nav-links">

  <li>

    <a href="/products">Menu</a>

  </li>
  <li>

           <Link to="/">Logout</Link>

          </li>
  

  
  
</ul>
</div>

       
  <img src={thank} width="1280" height="525"/>

</body>
    );
};
export default Final;