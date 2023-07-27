import React from "react";
import { useCart } from 'react-use-cart';
import {Link} from "react-router-dom";
import "./cart.css";
import { FaSignOutAlt, FaTrash } from "react-icons/fa";

export const ShoppingCart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
 return (
    <>
      {isEmpty ? (
        <p>Your cart is empty. Add some items to see them here!</p>
      ) : (
        <body>
      <div className="navbar">

        <div className="logo">

          < a href='/' style={{ color: 'white', textDecoration: 'none', fontFamily: 'cursive' }}>

            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Furniture</h3>

          </a>

        </div>

        <ul className="nav-links">

          <li>

            <a href="/Home">Profile</a>

          </li>

          <li>

           <Link to="/" className="log"><FaSignOutAlt/></Link>

          </li>

         
        </ul>


      </div>
      
     
        <div>
          <h2>Cart Items:</h2>
          <table>
          
            <tbody>
              {items.map((item)=>(
                <tr key={item.id}>
                <td>
                  <img src={item.thumb} width="100" height="90"/>
                </td>
                <td>
                {item.product_name}
                </td>
                <td>
                ₹{item.price}
                </td>
                <td>
                <button style={{width:"30px"}}onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                  -
                </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                
                <button style={{width:"30px"}} >{item.quantity}</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                <button style={{width:"30px"}}onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                 +
                </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                
                <button style={{color:'white',width:"30px"}} onClick={() => removeItem(item.id)}><FaTrash/></button>
                </td>
                </tr>
                

              ))}
            </tbody>
          </table>
           <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total Unique Items: <b>{totalUniqueItems}</b></p>
           <p >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total Items: <b>{totalItems}</b></p>
           <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total Price: <b style={{color:'red'}}>₹{cartTotal}</b></p>
          <button className="btn" style={{color:'white'}}onClick={() => emptyCart()}>Empty Cart</button>
          <button className="btn" ><Link to="/Final" style={{textDecoration:'none',color:'white'}}>Buy Now</Link></button>
        </div>
        </body>
      )}
    </>
  );
};

export default ShoppingCart;