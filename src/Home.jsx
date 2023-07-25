import React from 'react'
import "./App.css";
import Admin from './Admin.jpg'
import user from './user.jpg'
function Home(){

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

  
                <div class="row">
                    
        
                    <div class="column1">
                        <center><h2>Customer</h2></center>
                    <a href="/Login">
                        <img src={user} width="350px" height="300px"/>
                    </a>
                    
             </div>
             <div class="column2">
                        <center><h2>Admin</h2></center>
                    <a href="/Admin">
                        <img src={Admin} width="450px" height="300px"/>
                    </a>
                    
             </div>
             </div>
             </body>
                
    )
}
  

export default Home