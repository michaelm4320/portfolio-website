import { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import logo from '../assets/logo.svg';

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
    <nav className={'nav-section ${navActive ? "active" : ""}'} aria-label="Main Navigation">
        <div className="nav-section-icon">
            <img src={logo} alt="Michaels logo Section" />
        </div>
        <a
            className={`nav__hamburger ${navActive ? "active" : ""}`}
            onClick={toggleNav}
            aria-label="Toggle navigation menu"
            aria-expanded={navActive}
            aria-controls="navbar-menu"
        >
            <span className="nav__hamburger__line"></span>
            <span className="nav__hamburger__line"></span>
            <span className="nav__hamburger__line"></span>
        </a>
        <div className={`nav-section-content ${navActive ? "active" : ""}`}>
            <ul>
                <li>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar-active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="heroSection"
                        className="navbar-content"
                        aria-label="Navigate to Home Section"
                    >
                    Home
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar-active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="aboutSection"
                        className="navbar-content"
                        aria-label="Navigate to About Me Section"
                    >
                        About Me
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar-active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="experienceSection"
                        className="navbar-content"
                        aria-label="Navigate to Experience Section"
                    >
                        Experience
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar-active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="MyPortfolio"
                        className="navbar-content"
                        aria-label="Navigate to Portfolio Section"
                    >
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar-active-content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        to="Testimonials"
                        className="navbar-content"
                        aria-label="Navigate to Endorsements Section"
                    >
                        Endorsements
                    </Link>
                </li>
            </ul>
        </div>
        <Link
                onClick={closeMenu}
                activeClass="navbar-active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyContact"
                className="btn btn-outline-primary"
                aria-label="Navigate to Contact Me Section"
              >
                Contact Me
        </Link>
    </nav>
  );
}

export default Navbar;