import React from 'react';
import {NavLink} from "react-router-dom";
import Home from './Home';
import Products from './Products';
export default function Navbaradmin() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm  fixed-top">
  <div class="container">
    <a class="navbar-brand fw-bold fs-4" to="/">Abel Online Shoping</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/products">Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" to="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" to="/contact">Contact</a>
        </li>
        
      </ul>
     <div className="buttons">
     <a href="#" className="btn btn-outline-dark"><i className="fa fa-person"></i>Admin</a>

         <a href="/" className="btn btn-outline-dark"><i className="fa fa-sign-in me-2"></i>Logout</a>
         <a to="/cart" className="btn btn-outline-dark"><i className="fa fa-shopping-cart me-2"></i>Cart(0)</a>
     </div>
    </div>
  </div>
</nav>
<Home />
<Products/>
    </div>
  )
}
