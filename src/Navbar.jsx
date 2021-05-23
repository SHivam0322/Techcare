import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {NavLink} from 'react-router-dom'
import './index.css'

const Navbar = () => {
    return (
        <>
        <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto"> 
             
            <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <NavLink  className="navbar-brand" to="">TechCare</NavLink>
    <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink   className="nav-link active" aria-current="page" to="">Get Service</NavLink>
        </li>

        <li className="nav-item dropdown">
          <li className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           For Providers
          </li>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a   className="dropdown-item" href=''>Register your service</a></li>
            <li><a   className="dropdown-item" href=''>Get in touch</a></li>
            
          </ul>
        </li>
        <li className="nav-item">
          <NavLink   className="nav-link active" aria-current="page" to="/signup">Login/Signup</NavLink>
        </li>
        <li className="nav-item">
          <NavLink   className="nav-link active" aria-current="page" to="contact">Contact Us</NavLink>
        </li>
       
       
     
      </ul>
      
    </div>
  </div>
</nav>
            </div>
        </div>
    </div>
    </>
    )
}

export default Navbar
