import React from "react";
import { Link } from 'react-router-dom';

const Header =( ) => {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">React</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav" >
             <li className="nav-item">
                <Link className="nav-link" to="/person" >Person</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/home" >Home</Link>
            </li>
            
            <li className="nav-item">
                <Link className="nav-link" to="/about" >About us</Link>
            </li>
        </ul>
        <Link className='btn btn-primary ms-auto ' to='/'> 
            Sign Up
        </Link>
    </div>
  </div>
</nav>
      
    )
};

export default Header;
