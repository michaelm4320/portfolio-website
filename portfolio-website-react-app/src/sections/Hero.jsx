import React from 'react';
import testImg from '../assets/testImgF1.png';
import circles from '../assets/circles.png';
import Computer from '../canvas/Computers.jsx'; // Adjust the path as necessary

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function Hero() {
  return (
    <section id="heroSection" className="hero-section">
        <div className="hero-section-content">
            <div className="hero-section-text">
                <p className="hero-section-greeting">Hello, I'm Michael!</p>
                <h1 className="hero-section-title">Software
                <br />
                Engineer
                </h1>
                <p className="hero-section-description">Building the future to create impactful software solutions for a
                    brighter tomorrow.
                </p>
                <button className="btn-contact">Contact Me</button>
            </div>
        </div>
        <div className="hero-section-model">
            <Computer />
        </div>
    </section>
  );
}