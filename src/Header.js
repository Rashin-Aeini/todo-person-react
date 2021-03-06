import React from "react";
import { Link } from 'react-router-dom';

const Header =( ) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">React</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav" >

            <li className="nav-item">
                <Link className="nav-link" to="/crud/0" >Crud</Link>
            </li>
            
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
