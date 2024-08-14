import React from 'react';
import testImg from '../assets/testImgF1.png';
import circles from '../assets/circles.png';
import Computer from '../canvas/Computers.jsx'; // Adjust the path as necessary

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function Home() {
  return (

                <section id="homeSection" className="home-section">
                  <div className="home-section-content">
                    <div className="home-section-text">
                        <p className="home-section-greeting">Hello, I'm Michael</p>
                        <h1 className="home-section-title">Software
                        <br />
                        Engineer
                        </h1>
                        <p className="home-section-description">Passionate about developing innovative software solutions to solve real-world problems.</p>
                        <button className="btn-contact">Contact Me</button>
                    </div>
                  </div>
                  <div className="home-section-model">
                    <Computer />
                  </div>
                </section>
  );
}