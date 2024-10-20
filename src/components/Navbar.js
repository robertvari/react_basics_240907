import React from 'react'
import Logo from "../logo.svg"
import {Link, useLocation} from "react-router-dom"

export default function Navbar() {
  const location = useLocation()


  return (
    <div className="navbar">
      <img src={Logo} alt="logo" />

      <Link to="/" className={location.pathname === "/"? "active-page" : ""}>Home</Link>
      <Link to="/services" className={location.pathname === "/services"? "active-page" : ""}>Services</Link>
      <Link to="/about" className={location.pathname === "/about"? "active-page" : ""}>About</Link>
      <Link to="/contact" className={location.pathname === "/contact"? "active-page" : ""}>Contact</Link>

    </div>
  )
}
