import { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import logo from '../assets/logo.png';

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu;
    }
  }, []);

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