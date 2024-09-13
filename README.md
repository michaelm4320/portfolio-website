## Portfolio Website

### Overview

A personal portfolio website showcasing different sections about myself, my experience, projects, testimonials,
and a contact form with stunning 3D visuals. Built using modern web technologies to create a professional and
responsive single-page application.

![img_3.png](img_3.png)

![img_2.png](img_2.png)

## Features

- **Responsive Design:** Ensures a seamless experience across devices.
- **Interactive 3D Effects:** Engaging starry background and 3D Earth model using Three.js.
- **Contact Form:** Reach out to me directly via the contact form.
- **Accessibility:** Compliant with WCAG Level A standards.
- **Automated Testing:** Front-end tested using Playwright for reliable performance and functionality.
- **Database Integration:** MySQL database saves all submissions from the contact form.
- **Deployment:** To be hosted on AWS Lightsail with security implementations to safeguard data and ensure robust access
  control.

## Sections

* **Navbar**
    - Contains logo and website navigation.
* **Hero**
    - Short introduction with interactive Earth model.
* **About Me**
    - Background information of myself.
* **Experience**
    - Professional experience and tech stack.
* **Portfolio**
    - List of projects I've worked and saved on my github.
* **Endorsements**
    - Recommendations from colleagues.
* **Contact Me**
    - Contact form to submit information to my email and database.

## Tech Stack

- **Frontend:** React, Vite, Three.js, HTML, CSS, JavaScript
- **Backend:** Spring Boot, MySQL
- **Deployment:** (To be determined)

## Installation & Setup

Clone the repository and install dependencies:

- git clone https://github.com/michaelm4320/portfolio-website.git
- cd portfolio-website
- npm install
- npm run dev

## CI/CD Pipeline

1. **Backend Build and Test**
    - **Environment**: `ubuntu-latest`
    - **Steps**:
        - **Checkout Code**: Uses the `actions/checkout@v2` action to checkout the code.
        - **Set up JDK 21**: Uses the `actions/setup-java@v4` action to set up Java Development Kit version 21.
        - **Set up Maven**: Uses the `stCarolas/setup-maven@v5` action to set up Maven version 3.8.2.
        - **Build and Test Backend**: Runs the `mvn clean install` command to build and test the backend.

2. **Frontend Build and Test**
    - **Environment**: `ubuntu-latest`
    - **Steps**:
        - **Checkout Code**: Uses the `actions/checkout@v2` action to checkout the code.
        - **Set up Node.js**: Uses the `actions/setup-node@v2` action to set up Node.js version 16.
        - **Install Dependencies and Build Frontend**: Runs the `npm install` and `npm run build` commands in
          the `portfolio-website-react-app` directory.
        - **Start Development Server**: Starts the Vite development server and runs it in the background.
        - **Run End-to-End Tests with Playwright**: Runs the `npm run test:e2e` command to execute end-to-end tests
          using Playwright.

## `package.json` Overview

The `package.json` file is a crucial part of any Node.js project. It contains metadata about the project,
including its dependencies, scripts, and configuration. In this project, `package.json` has been configured to
handle various tasks related to development and testing.

## Spring Boot

To run Spring Boot, run `mvn.cmd spring-boot:run` on the terminal in root.

## Scripts

The `scripts` section in `package.json` allows you to define commands that can be run from the terminal.
Here's an overview of the scripts set up for this project:

- **`dev`**: Runs the Vite development server. Use `npm run dev` to start the development server and view the
  application locally.
- **`test`**: Runs Playwright unit tests. Use `npm run test`.

## Playwright

**Playwright** is used for unit and end-to-end (e2e) testing.

**Running Tests**

- **`npm run test`**

# Tutorials

- https://www.youtube.com/watch?v=_vOInY6SRVE
- https://www.youtube.com/watch?v=FntV9iEJ0tU&
- https://www.youtube.com/watch?v=ugIUObNHZdo