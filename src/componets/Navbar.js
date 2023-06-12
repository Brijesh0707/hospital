import React from 'react'
import '../componets/Navbar.css'
import Logo from '../images/logo.jpg'
import Menu from '../images/menu.png'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <NavLink to="/">
  <img src={Logo} alt="" width="110" height="34" id="logo"  />
  </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span><img src={Menu} alt="" width="50" height="50" /></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink to="/">
          <a className="nav-link" >Home</a>
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/service">
          <a className="nav-link" >Service</a>
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/contact">
          <a className="nav-link" >Contact</a>
          </NavLink>
        </li>
        <li className="nav-item">
         <NavLink to="/help">
          <a className="nav-link" >Help</a>
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar