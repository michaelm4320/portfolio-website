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
    <nav className={'nav-section ${navActive ? "active" : ""}'}>
        <div className="nav-section-icon">
            <img src={logo} alt="logo Section" />
        </div>
        <a
            className={`nav__hamburger ${navActive ? "active" : ""}`}
            onClick={toggleNav}
        >
            <span className="nav__hamburger__line"></span>
            <span className="nav__hamburger__line"></span>
            <span className="nav__hamburger__line"></span>
        </a>
        <div className={`nav-section-content ${navActive ? "active" : ""}`}>
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

export default Navbar;