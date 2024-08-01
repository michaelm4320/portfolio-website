import React from 'react';
import testImg from '../assets/testImg4.png';
import circles from '../assets/circles.png';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function Home() {
  return (
    <div className="parallax-container">
        <Parallax pages={2}>
            <ParallaxLayer offset={.5} speed={2}>
                <img src={circles} alt="home Section" />
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1}>
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
                  <div className="home-section-img">
                    <img src={testImg} alt="home Section" />
                  </div>
                </section>
            </ParallaxLayer>
        </Parallax>
    </div>
  );
}