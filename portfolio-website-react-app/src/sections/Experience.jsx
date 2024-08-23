import React from 'react';
import intevations from '../assets/intevations.png';
import html from '../assets/html-5.svg';
import javascript from '../assets/javascript.svg';
import css from '../assets/css-3.svg';
import java from '../assets/java.svg';
import cpp from '../assets/c-plusplus.svg';
import python from '../assets/python.svg';
import react from '../assets/react.svg';
import springboot from '../assets/spring-icon.svg';
import mysql from '../assets/mysql.svg';
import aws from '../assets/aws.svg';
import git from '../assets/git-icon.svg';
import playwright from '../assets/playwright.svg';

export default function Experience() {
  return (
    <section id="experienceSection" className="experience-section">
      <div className="experience-section-content">

        {/* Tech Stack Section */}
        <div className="tech-stack hologram-container">
          <h2 className="tech-stack-title">Tech Stack</h2>
          <div className="tech-stack-grid">
              <div className="tech-skill-container">
                <div className="tech-stack-item">
                  <img src={html} alt="HTML" className="tech-stack-icon" />
                </div>
              </div>
            <div className="tech-skill-container">
                <div className="tech-stack-item">
                  <img src={javascript} alt="JavaScript" className="tech-stack-icon" />
                </div>
            </div>
            <div className="tech-skill-container">
                <div className="tech-stack-item">
                  <img src={css} alt="CSS" className="tech-stack-icon" />
                </div>
            </div>
            <div className="tech-skill-container">
                <div className="tech-stack-item">
                  <img src={java} alt="Java" className="tech-stack-icon" />
                </div>
            </div>
            <div className="tech-skill-container">
                <div className="tech-stack-item">
                  <img src={cpp} alt="C++" className="tech-stack-icon" />
                </div>
            </div>
            <div className="tech-skill-container">
                <div className="tech-stack-item">
                  <img src={python} alt="Python" className="tech-stack-icon" />
                </div>
            </div>
            <div className="tech-skill-container">
                <div className="tech-stack-item">
                  <img src={react} alt="React" className="tech-stack-icon" />
                </div>
            </div>
            <div className="tech-skill-container">
                <div className="tech-stack-item">
                  <img src={springboot} alt="Spring Boot" className="tech-stack-icon" />
                </div>
            </div>
            <div className="tech-skill-container">
                <div className="tech-stack-item">
                  <img src={mysql} alt="MySQL" className="tech-stack-icon" />
                </div>
            </div>
            <div className="tech-skill-container">
                <div className="tech-stack-item">
                  <img src={aws} alt="AWS" className="tech-stack-icon" />
                </div>
            </div>
            <div className="tech-skill-container">
                <div className="tech-stack-item">
                  <img src={git} alt="Git" className="tech-stack-icon" />
                </div>
            </div>
            <div className="tech-skill-container">
                <div className="tech-stack-item">
                  <img src={playwright} alt="Playwright" className="tech-stack-icon" />
                </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="experience-details hologram-container">
          <h2 className="experience-title">Experience</h2>
          <div className="experience-item">
            <div className="experience-section-icon">
                <img src={intevations} alt="intevations logo" />
            </div>
            <h2 className="experience-item-title">Front-End Developer</h2>
            <h3 className="experience-item-company">Intevations LLC</h3>
            <p className="experience-item-dates">Sept 2022 - May 2023</p>
            <p className="experience-item-description">
                <ul>
                    <li>
                        Developed a full-stack web application to process and analyze 5000 patient records for capital planners,
                        assisting them to efficiently identify key trends and make informed decisions
                    </li>
                    <li>
                        Led frontend development to design a dynamic dashboard using HTML, CSS, and JavaScript, displaying
                        interactive charts of medical patient data generated from a Synthetic Patient Population Simulator
                    </li>
                    <li>
                        Designed backend features in a 4-person team using Jira for project management, implementing user login
                        and authentication with Python and Flask, and managing patient records storage using MySQL, ensuring
                        alignment with project requirements through iterative feedback
                    </li>
                </ul>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
