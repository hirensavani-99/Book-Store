import React from 'react'
import Products from './Products'
export default function Home() {
    return (
        <div className="hero">
            <div class="card bg-dark text-white">
                <img src="/assets/bg.jpg" class="card-img" alt="Background" width="100%" height="450px" />
                <div class="card-img-overlay d-flex flex-column  justify-content-top">
                    <div className="container">
                        <h5 class="card-title display-3 fw-bolder mb-0 ">NEW SPECIAL OFFERS</h5>
                        <p class="card-text lead fx-2">CHECK OUT ALL THE BOOKS</p>
                        
                    </div>
                </div>
            </div>
        
      <Products/>  
        
        </div>
    )
}
