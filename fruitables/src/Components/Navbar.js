import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';


export default function Navbar() {
  return (
    <>
      <div className="navbar1">
        <div className="location">
          <Link to="/"> <i class="fa-solid fa-location-dot"></i> 123 Street, New York </Link>
          <Link to="/"><i class="fa-solid fa-envelope"></i> Email@Example.com</Link>
        </div>
        <div className="policy">
          <Link to="/">Privacy Policy /</Link>
          <Link to="/"> Terms of Use /</Link>
          <Link to="/"> Sales and Refunds</Link>
        </div>
      </div>



      <div className="navbar2">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" to="#">Fruitabes</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="./home">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="./shop">Shop</Link>
                </li>
                
                <li class="nav-item dropdown">
                  <Link class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Pages
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="./cart">Cart</Link></li>
                    <li><Link className="dropdown-item" to="./chackout">Chackout</Link></li>
                    <li><Link className="dropdown-item" to="./testimonial">Testimonial</Link></li>

                    <li><Link class="dropdown-item" to="./myerror">404 page</Link></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="./contact">Contact</Link>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-solid fa-lock" id="navbarlock"></i>
                <i class="fa-solid fa-user"></i>
              </form>
            </div>
            <li class="nav-item" id='mydetails'>
                  <Link class="nav-link test1" to="./shopDetails">Shop Details</Link>
                </li>

            <div className="test">
              <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
              </ul>
            </div>
          </div>
        </nav>

      </div>




    </>
  )
}

// export default Navbar;