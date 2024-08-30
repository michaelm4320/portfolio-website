## Portfolio Website

### Overview

A personal portfolio website showcasing different sections about myself, my experience, projects, testimonials,
and a contact form with stunning 3D visuals. Built using modern web technologies to create a professional and
responsive single-page application.

## Features

- **Responsive Design:** Ensures a seamless experience across devices.
- **Interactive 3D Effects:** Engaging starry background and 3D Earth model using Three.js.
- **Contact Form:** Reach out to me directly via the contact form.
- **Accessibility:** Compliant with WCAG Level A standards.

### Sections

* Home
* About Me
* Experience
* Portfolio
* Testimonials
* Resume
* Contact Me

## Tech Stack

- **Frontend:** React, Vite, Three.js, HTML, CSS, JavaScript
- **Backend (planned):** Spring Boot, MySQL
- **Deployment:** (To be determined)

## Installation & Setup

Clone the repository and install dependencies:

- git clone https://github.com/michaelm4320/portfolio-website.git
- cd portfolio-website
- npm install
- npm run dev

#### CI/CD Pipeline

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
        - **Run Unit Tests with Vitest**: Runs the `npm run test:unit` command to execute unit tests using Vitest.
        - **Start Development Server**: Starts the Vite development server and runs it in the background.
        - **Run End-to-End Tests with Playwright**: Runs the `npm run test:e2e` command to execute end-to-end tests
          using Playwright.

## `package.json` Overview

The `package.json` file is a crucial part of any Node.js project. It contains metadata about the project,
including its dependencies, scripts, and configuration. In this project, `package.json` has been configured to
handle various tasks related to development and testing.

### Spring Boot

To run Spring Boot, run `mvn.cmd spring-boot:run` on the terminal in root.

### Scripts

The `scripts` section in `package.json` allows you to define commands that can be run from the terminal.
Here's an overview of the scripts set up for this project:

- **`dev`**: Runs the Vite development server. Use `npm run dev` to start the development server and view the
  application locally.
- **`test`**: Runs Playwright unit tests. Use `npm run test`.

### Playwright

**Playwright** is used for unit and end-to-end (e2e) testing. It ensures that the entire application works correctly
from the
user's

- **Configuration**:
    - Configuration for Playwright is defined in `playwright.config.cjs`.
    - The `baseURL` is set to `http://localhost:5173/`, which is the local development server URL.
    - Tests are located in the `playwright-tests` directory.

- **Running Tests**:
    - `npm run test`

# Tutorials

https://www.youtube.com/watch?v=_vOInY6SRVE