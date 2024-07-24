import React from 'react';
import testImg from '../assets/testImg.png';

export default function Home() {
  return (
    <section id="homeSection" className="home--section">
      <div className="home-section-content">
        <div className="home-section-text">
            <p>Hello, I'm Michael</p>
            <h1>Software Engineer</h1>
            <p>Passionate about developing innovative software solutions to solve real-world problems.</p>
            <button className="btn-contact">Contact Me</button>
        </div>
      </div>
      <div className="home-section-img">
        <img src={testImg} alt="home Section" />
      </div>
    </section>
  );
}