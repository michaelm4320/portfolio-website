import React from 'react';
import testImg from '../assets/testImgF1.png';
import circles from '../assets/circles.png';
import Computer from '../canvas/Computers.jsx';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function AboutMe() {
  return (
      <section id="aboutSection" className="about-section">
        <div className="about-section-content">
            <div className="about-section-img">
                <img src={testImg} alt="about Section" />
            </div>
            <div className="about-section-text">
                <h1 className="about-section-title">About Me</h1>
                <p className="about-section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
      </section>
  );
}