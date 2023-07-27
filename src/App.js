import React from "react";
import Home from "./Home";
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './Login';
import { Register } from "./Register";
import { Admin } from "./Admin";
import { Navbar } from "./Navbar";
import { Products } from "./Products";
import { ShoppingCart } from "./ShoppingCart";
import {Final} from "./Final";
import { Crud } from "./Crud";
function App() {
  return (
    
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Navbar />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route path='/Admin' element={<Admin />}></Route>
        <Route path='/Products' element={<Products />}></Route>
        <Route path='/ShoppingCart' element={<ShoppingCart />}></Route>
        <Route path='/Final' element={<Final />}></Route>
        <Route path='/Crud' element={<Crud />}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;