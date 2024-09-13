import React from "react";
import testImg from "../assets/profile.png";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function AboutMe() {
  return (
    <section id="aboutSection" className="about-section">
      <div className="about-section-content">
        <div className="about-section-img">
          <img src={testImg} alt="Picture of Michael" />
        </div>
        <div className="about-section-box">
          <div className="about-section-text">
            <h1 className="about-section-title">About Me</h1>
            <p className="about-section-description">
              I'm Michael, a Software Engineer driven by a passion for creating
              innovative software solutions that shape a brighter tomorrow. I graduated
              from Florida Gulf Coast University with a bachelor's degree in Software
              Engineering in December 2023. My journey in technology began when I picked
              up my first Nintendo controller, sparking a lifelong enthusiasm for all
              things tech. Since then, I've committed myself to continuous learning,
              from building computers to developing websites. I'm always striving to
              design smarter, more robust software applications.
              <br /> <br />
              With each project, I'm constantly pushing the boundaries of my development
              skills, one line of code at a time. My goal is to bring joy and put smiles on
              people's faces through the software I build, helping to make a positive impact
              on our community. And when I'm not coding, I'm playing my favorite video games and
              exploring ways to enhance the games I grew up with by creating mods for games like
              Minecraft using Java.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
