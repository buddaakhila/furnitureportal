import React ,{useState}from 'react';

import './Navbar.css';
import './Crud.css';
import { FaHome } from 'react-icons/fa';


export const Crud = () => {
  const [furnitureid, setFurnitureId] = useState('');
  const [customerid, setCustomerid] = useState('');
  
 
  const handleInputChange = (event) => {
    setFurnitureId(event.target.value);
  };
 
  const handleInactivateFurniture=(furnitureid) => {
    if (window.confirm('Are you sure?')) {
    // Make the API call to inactivate the furniture
    const apiUrl = 'http://localhost:5074/Furniture/inactivefurniture/furnitureid=${furnitureid}';
     fetch(apiUrl,{
       method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          // Success: Handle any UI updates or notifications here
          alert('Furniture inactivated successfully.');
        } else {
          // Handle error responses here
          alert('Failed to inactivate furniture.');
        }
      })
      .catch((error) => {
        // Handle network errors here
        console.error('Network error:', error);
      });
    }
  };
 


  

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

          <a href="/" className='icon-home'><FaHome/></a>

        </li>
        
        

        
        
      </ul>
      
      
    </div>
     
    
                    
        
                    <div class="one">
                        <center><h2>Customer Inactive</h2></center>
                        <form className="login-form">
                <label htmlFor="number">Customer ID</label>
                <input value={customerid} onChange={(e) => setCustomerid(e.target.value)} placeholder="customerid" id="customerid" name="customerid" />
                <button type="submit" style={{width:'140px'}} >Inactivate Customer</button>

              </form>
                    
             </div>
             <div class="two">
                        <center><h2>Product Inactive</h2></center>
                        <form className="login-form">
                <label htmlFor="number">Furniture ID</label>
                <input value={furnitureid} onChange={handleInputChange} placeholder="furnitureid" id="productid" name="productid" />
                <button type="submit" style={{width:'140px'}} onClick={handleInactivateFurniture}>Inactivate Product</button>

              </form>
                    
             </div>
             

             
   
        
          
    </body>

  );

};




export default Crud;