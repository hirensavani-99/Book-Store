import React from 'react';
import { Link } from "react-router-dom"


import { useSelector } from 'react-redux';
export default function Navbar() {

  const cartData = useSelector(state => state.handleCart)
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm  ">
        <div class="container">
          <Link class="navbar-brand fw-bold fs-4" to="/">Readers club</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/products">Store</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">Contact</Link>
              </li>

            </ul>
            <div className="buttons">

              <Link to="/cart" className="btn btn-outline-dark"><i className="fa fa-shopping-cart me-2"></i>({cartData.length})</Link>
            </div>
          </div>
        </div>
      </nav>



    </div>
  )
}
