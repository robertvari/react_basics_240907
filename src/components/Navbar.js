import React from 'react'
import Logo from "../logo.svg"

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="logo" />
      <a href="/">Home</a>
      <a href="/services">Services</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </div>
  )
}
