import { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import logo from '../assets/M-iconPortfolio.png';

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  const handleKeyDown = (event, action) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // Prevent default spacebar scroll
        action(); // Trigger the action
      }
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
    <nav className={`nav-section ${navActive ? "active" : ""}`} aria-label="Main Navigation">
      <div className="nav-section-icon">
        <img src={logo} alt="Michaels logo Section" />
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
        aria-label="Toggle navigation menu"
        aria-expanded={navActive}
        aria-controls="navbar-menu"
        onKeyDown={(e) => handleKeyDown(e, toggleNav)}
        tabIndex="0"
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
                  onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault(); // Prevent any default behavior
                          closeMenu(); // Trigger your closeMenu function
                          document.getElementById('heroSection').scrollIntoView({ behavior: 'smooth' }); // Scroll to the section manually
                      }
                  }}
                  activeClass="navbar-active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="heroSection"
                  className="navbar-content"
                  aria-label="Navigate to Home Section"
                  tabIndex="0" /* Ensure tab order */
              >
                  Home
              </Link>
          </li>
          <li>
              <Link
                  onClick={closeMenu}
                  onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault(); // Prevent any default behavior
                          closeMenu(); // Trigger your closeMenu function
                          document.getElementById('aboutSection').scrollIntoView({ behavior: 'smooth' }); // Scroll to the section manually
                      }
                  }}
                  activeClass="navbar-active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="aboutSection"
                  className="navbar-content"
                  aria-label="Navigate to About Section"
                  tabIndex="0" /* Ensure tab order */
              >
                  About Me
              </Link>
          </li>
          <li>
              <Link
                  onClick={closeMenu}
                  onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault(); // Prevent any default behavior
                          closeMenu(); // Trigger your closeMenu function
                          document.getElementById('experienceSection').scrollIntoView({ behavior: 'smooth' }); // Scroll to the section manually
                      }
                  }}
                  activeClass="navbar-active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="experienceSection"
                  className="navbar-content"
                  aria-label="Navigate to Experience Section"
                  tabIndex="0" /* Ensure tab order */
              >
                  Experience
              </Link>

          </li>
          <li>
              <Link
                  onClick={closeMenu}
                  onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault(); // Prevent any default behavior
                          closeMenu(); // Trigger your closeMenu function
                          document.getElementById('MyPortfolio').scrollIntoView({ behavior: 'smooth' }); // Scroll to the section manually
                      }
                  }}
                  activeClass="navbar-active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="MyPortfolio"
                  className="navbar-content"
                  aria-label="Navigate to Portfolio Section"
                  tabIndex="0" /* Ensure tab order */
              >
                  Portfolio
              </Link>

          </li>
          <li>
              <Link
                  onClick={closeMenu}
                  onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault(); // Prevent any default behavior
                          closeMenu(); // Trigger your closeMenu function
                          document.getElementById('Testimonials').scrollIntoView({ behavior: 'smooth' }); // Scroll to the section manually
                      }
                  }}
                  activeClass="navbar-active-content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="Testimonials"
                  className="navbar-content"
                  aria-label="Navigate to endorsements Section"
                  tabIndex="0" /* Ensure tab order */
              >
                  Endorsements
              </Link>

          </li>
          <li>
             <Link
                 onClick={closeMenu}
                 onKeyDown={(e) => {
                     if (e.key === 'Enter' || e.key === ' ') {
                         e.preventDefault(); // Prevent any default behavior
                         closeMenu(); // Trigger your closeMenu function
                         document.getElementById('MyContact').scrollIntoView({ behavior: 'smooth' }); // Scroll to the section manually
                     }
                 }}
                 activeClass="navbar-active-content"
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration={500}
                 to="MyContact"
                 className="navbar-content"
                 aria-label="Navigate to endorsements Section"
                 tabIndex="0" /* Ensure tab order */
             >
                Contact
             </Link>
          </li>
        </ul>
      </div>
      <button
        onClick={() => {
          const isPaused = document.body.classList.toggle('animations-paused');
          closeMenu(); // Close the menu if necessary

          // Dispatch event to notify about animation pause
          const event = new Event('animationpause');
          window.dispatchEvent(event);

          // Update the button text based on the new state
          const button = document.getElementById('animationToggleButton');
          if (button) {
            button.textContent = isPaused ? 'Resume Animations' : 'Pause Animations';
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const isPaused = document.body.classList.toggle('animations-paused');
            closeMenu(); // Close the menu if necessary

            // Dispatch event to notify about animation pause
            const event = new Event('animationpause');
            window.dispatchEvent(event);

            // Update the button text based on the new state
            const button = document.getElementById('animationToggleButton');
            if (button) {
              button.textContent = isPaused ? 'Resume Animations' : 'Pause Animations';
            }
          }
        }}
        className="btn btn-outline-primary"
        aria-label="Pause or Resume Animations"
        tabIndex="0"
        id="animationToggleButton"
      >
        Pause Animations
      </button>
    </nav>
  );
}

export default Navbar;
