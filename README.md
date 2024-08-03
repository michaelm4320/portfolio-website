## Portfolio Website

### Overview

A personal portfolio website showcasing different sections about myself, my technical skills, projects, and a contact form. Built using modern web technologies to create a professional and responsive single-page application.

### Sections

* Home
* About Me
* Tech Stack / Experience
* Portfolio
* Testimonials
* Contact Me

### Tech Stack

* **Frontend**: HTML / CSS / JavaScript / React + Vite
* **Backend**: Spring Boot / MySQL


### Features

### CI/CD

This project uses GitHub Actions to automate the build and test processes for both the frontend and backend.

#### Workflow Configuration

- **Trigger**: The workflow is triggered on pushes and pull requests to the `main` branch.

#### Jobs

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
        - **Install Dependencies and Build Frontend**: Runs the `npm install` and `npm run build` commands in the `portfolio-website-react-app` directory.
        - **Run Unit Tests with Vitest**: Runs the `npm run test:unit` command to execute unit tests using Vitest.
        - **Start Development Server**: Starts the Vite development server and runs it in the background.
        - **Run End-to-End Tests with Playwright**: Runs the `npm run test:e2e` command to execute end-to-end tests using Playwright.


* **User Experience**:
  - Responsive design for desktop and mobile.
  - Intuitive and user-friendly navigation.

### Future Enhancements

- **Advanced Testing**: Implementation of more comprehensive unit and integration tests.
- **Animations**: Enhancing the design with more custom animations and effects.

## `package.json` Overview

The `package.json` file is a crucial part of any Node.js project. It contains metadata about the project, 
including its dependencies, scripts, and configuration. In this project, `package.json` has been configured to 
handle various tasks related to development and testing.

### Scripts

The `scripts` section in `package.json` allows you to define commands that can be run from the terminal. Here's an overview of the scripts set up for this project:

- **`dev`**: Runs the Vite development server. Use `npm run dev` to start the development server and view the application locally.
- **`build`**: Builds the project for production. Use `npm run build` to generate optimized assets for deployment.
- **`lint`**: Lints the codebase using ESLint. Use `npm run lint` to check for code quality and potential issues.
- **`preview`**: Previews the production build locally. Use `npm run preview` to see how the production build will look.
- **`test`**: Runs Playwright end-to-end tests. Use `npm run test` to execute tests that check the full flow of the application.
- **`test:e2e`**: Alias for running Playwright end-to-end tests. Use `npm run test:e2e` for the same purpose as `npm run test`.
- **`test:unit`**: Runs unit tests using Vitest. Use `npm run test:unit` to execute unit tests on the project's components and logic.

## Testing Setup

### Playwright

**Playwright** is used for end-to-end (e2e) testing. It ensures that the entire application works correctly from the user's 
perspective by simulating interactions with the application.

- **Configuration**:
  - Configuration for Playwright is defined in `playwright.config.cjs`.
  - The `baseURL` is set to `http://localhost:5173/`, which is the local development server URL.
  - Tests are located in the `playwright-tests` directory.

- **Running Tests**:
  - Use `npm run test` or `npm run test:e2e` to run Playwright end-to-end tests.

### Vitest

**Vitest** is used for unit testing. It tests individual components and functions in isolation to ensure they work correctly.

- **Configuration**:
  - Configuration for Vitest is defined in `vitest.config.js`.
  - The `include` option specifies that tests are located in the `unit-tests` directory.

- **Running Tests**:
  - Use `npm run test:unit` to run unit tests with Vitest.

## Directory Structure for Tests

- **Playwright Tests**: Located in the `playwright-tests` directory.
- **Vitest Unit Tests**: Located in the `unit-tests` directory.

## Summary

This setup ensures that the application is thoroughly tested with both end-to-end and unit tests. 
Playwright handles the e2e testing, simulating user interactions, while Vitest focuses on unit tests for 
individual components and logic.

# Tutorials

https://www.youtube.com/watch?v=_vOInY6SRVE