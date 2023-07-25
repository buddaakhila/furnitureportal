import React, { useState } from 'react'
import product_card from "./product_data";
import "./Products.css";
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
export const Products = () => {
  // const [cartItems, setCartItems] = useState([]);
  // const addToCart = (item) => {
  //   setCartItems([...cartItems, item]);
  // }
  const {
    addItem
  } = useCart();
  const listItems = product_card.map((item) =>
    <div className="card" key={item.id}>
      <div className="card_img">
        <img src={item.thumb} alt="Products" width="300" height="120" />
      </div>
      <div className="card_header">
        <h2>{item.product_name}</h2>
        <p className="price">{item.price}<span>₹</span></p>
        <div className="btn" onClick={() => addItem(item)} >Add to cart</div>
      </div>
    </div>

  );
  return (
    <body>
      <div className="navbar">

        <div className="logo">

          < a href='/' style={{ color: 'white', textDecoration: 'none', fontFamily: 'cursive' }}>

            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Furniture</h3>

          </a>

        </div>

        <ul className="nav-links">

          
          
           
             

           

          <li>

           <Link to="/ShoppingCart">Cart</Link>

          </li>
          <li>

           <Link to="/">Logout</Link>

          </li>

        </ul>


      </div>
      <div className="main_content">

        {listItems}
      </div>
      <div className="btn" type="button" ><Link to="/ShoppingCart" style={{ textDecoration: 'none', color: 'white' }}>Check Out</Link></div>
    </body>
  )
}
export default Products;