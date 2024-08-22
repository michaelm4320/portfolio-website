import React from 'react';
import html from '../assets/html-5.svg';
/*import javascript from '../assets/javascript.svg';
import css from '../assets/css3.svg';
import java from '../assets/java.svg';
import cpp from '../assets/cpp.svg';
import python from '../assets/python.svg';
import react from '../assets/react.svg';
import springboot from '../assets/springboot.svg';
import mysql from '../assets/mysql.svg';
import aws from '../assets/aws.svg';
import arduino from '../assets/arduino.svg';
import playwright from '../assets/playwright.svg';*/

export default function Experience() {
  return (
    <section id="experienceSection" className="experience-section">
      <div className="experience-section-content">

        {/* Tech Stack Section */}
        <div className="tech-stack hologram-container">
          <h2 className="tech-stack-title">Tech Stack</h2>
          <div className="tech-stack-grid">
            <div className="tech-stack-item">
              <img src={html} alt="HTML" className="tech-stack-icon" />
              <p>HTML</p>
            </div>
            <div className="tech-stack-item">
              <img src={html} alt="JavaScript" className="tech-stack-icon" />
              <p>JavaScript</p>
            </div>
            <div className="tech-stack-item">
              <img src={html} alt="CSS" className="tech-stack-icon" />
              <p>CSS</p>
            </div>
            <div className="tech-stack-item">
              <img src={html} alt="Java" className="tech-stack-icon" />
              <p>Java</p>
            </div>
            <div className="tech-stack-item">
              <img src={html} alt="C++" className="tech-stack-icon" />
              <p>C++</p>
            </div>
            <div className="tech-stack-item">
              <img src={html} alt="Python" className="tech-stack-icon" />
              <p>Python</p>
            </div>
            <div className="tech-stack-item">
              <img src={html} alt="React" className="tech-stack-icon" />
              <p>React</p>
            </div>
            <div className="tech-stack-item">
              <img src={html} alt="Spring Boot" className="tech-stack-icon" />
              <p>Spring Boot</p>
            </div>
            <div className="tech-stack-item">
              <img src={html} alt="MySQL" className="tech-stack-icon" />
              <p>MySQL</p>
            </div>
            <div className="tech-stack-item">
              <img src={html} alt="AWS" className="tech-stack-icon" />
              <p>AWS</p>
            </div>
            <div className="tech-stack-item">
              <img src={html} alt="Arduino" className="tech-stack-icon" />
              <p>Arduino</p>
            </div>
            <div className="tech-stack-item">
              <img src={html} alt="Playwright" className="tech-stack-icon" />
              <p>Playwright</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="experience-details hologram-container">
          <h2 className="experience-title">Experience</h2>
          <div className="experience-item">
            <h3 className="experience-item-title">Senior Capstone Project</h3>
            <p className="experience-item-description">
              Worked on a team to develop a full-stack application using React, Node.js, and MySQL.
              My role involved front-end development, API integration, and database management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
