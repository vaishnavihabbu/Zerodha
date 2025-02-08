import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#FFFF"}}>
        <div class="container">
          <Link class="navbar-brand" to="/">
            <img src="/media/images/logo.svg" style={{width:"25%"}}></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active p-3" aria-current="page" to="/signup" style={{marginLeft:"20px"}}>
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active p-3" to="/about" style={{marginLeft:"20px"}}>
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active p-3" to="/products" style={{marginLeft:"20px"}}>
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active p-3" to="/pricing" style={{marginLeft:"20px"}}>
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active p-3" to="/support" style={{marginLeft:"20px"}}>
                  Support
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active p-3" to="#" style={{marginLeft:"20px"}}>
                <i class="fa-solid fa-bars"></i>
                </Link>
              </li>
            </ul>
            </form>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
