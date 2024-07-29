import React from 'react';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav id="homeSection" className="nav-section">
        <div className="nav-section-icon">
            <img src={logo} alt="logo Section" />
        </div>
        <div className="nav-section-content">
            <ul>
                <li>Home</li>
                <li>About Me</li>
                <li>Experience</li>
                <li>Portfolio</li>
                <li>Testimonials</li>
            </ul>
        </div>
        <div className="nav-section-btn">
            <button className="btn-nav">Contact Me</button>
        </div>
    </nav>
  );
}