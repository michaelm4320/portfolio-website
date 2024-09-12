import React from 'react';
import Earth from '../canvas/Earth.jsx';
import testImg from '../assets/testImgF1.png';
import circles from '../assets/circles.png';
import Computer from '../canvas/Computers.jsx';
import linkedinIcon from '../assets/linkedin_icon-2.svg';
import githubIcon from '../assets/github-icon-2.svg';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

// Smoothly scroll to the contact section when called
export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('MyContact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="heroSection" className="hero-section">
      <div className="hero-section-content">
        <div className="hero-section-text">
          <p className="hero-section-greeting">
            Hi, my name is&nbsp;<span className="hero-section-name">Michael Martinez</span>
          </p>
          <h1 className="hero-section-title">
            Software
            <br />
            Engineer
          </h1>
          <p className="hero-section-description">
            I design innovative software solutions to solve
            real-world challenges.
          </p>
        </div>
        <div className="hero-btn-group">
              {/* Get in Touch Button */}
              <button className="btn-contact" onClick={scrollToContact} aria-label="Navigate to Contact Me section">
                Get in Touch
              </button>

              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/michaelamartinez4320/"
                className="hero-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="icon" />
              </a>

              {/* GitHub Icon */}
              <a
                href="https://github.com/michaelm4320"
                className="hero-github"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <img src={githubIcon} alt="GitHub" className="icon" />
              </a>
            </div>
      </div>
      <div className="hero-section-model" aria-label="Interactive 3D Earth model">
        <Earth />
      </div>
    </section>
  );
}
