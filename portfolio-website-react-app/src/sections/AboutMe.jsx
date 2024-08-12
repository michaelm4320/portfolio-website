import React from "react";

const AboutMe = () => {
  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>About Me</h1>
      <p style={styles.paragraph}>
        Hi, I'm Michael, a passionate software engineer with a love for video games and web development.
        My goal is to create engaging and interactive experiences that leave a lasting impression.
        With a background in React, Node.js, and Three.js, I'm always exploring new technologies
        and pushing the boundaries of what's possible on the web.
      </p>
    </section>
  );
};

const styles = {

  heading: {
    fontSize: "3em",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1.2em",
    lineHeight: "1.6em",
    maxWidth: "800px",
    margin: "0 auto",
  },
};

export default AboutMe;
