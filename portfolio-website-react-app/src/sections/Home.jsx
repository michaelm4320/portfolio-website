import React from 'react';
import testImg from '../assets/testImg.png';

export default function Home() {
  return (
    <section id="homeSection" className="home--section">
      <div className="home--section--content--box">
        <div className="home--section--content">
          <p className="section--title">Hey, I'm John</p>
          <h1 className="home--section--title">
            <span className="home--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="home--section-description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <br /> Dolorum, quas. Amet soluta assumenda cum?
          </p>
        </div>
        <button className="btn btn-primary">Contact Me</button>
      </div>
<div className="home--section--img">
        <img src={testImg} alt="home Section" />
      </div>
    </section>
  );
}