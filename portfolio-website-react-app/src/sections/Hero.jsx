import React from 'react';
import Earth from '../canvas/Earth.jsx';
import testImg from '../assets/testImgF1.png';
import circles from '../assets/circles.png';
import Computer from '../canvas/Computers.jsx'; // Adjust the path as necessary

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function Hero() {
  return (
    <section id="heroSection" className="hero-section">
        <div className="hero-section-content">
            <div className="hero-section-text">
                <p className="hero-section-greeting">
                  Hi, my name is&nbsp;<span className="hero-section-name">Michael Martinez</span>
                </p>
                <h1 className="hero-section-title">Software
                <br />
                Engineer
                </h1>
                <p className="hero-section-description">I design innovative software solutions to solve
                    real-world challenges.
                </p>
            </div>
            <button className="btn-contact">Get in Touch</button>
        </div>
        <div className="hero-section-model">
            <Earth />
        </div>
    </section>
  );
}