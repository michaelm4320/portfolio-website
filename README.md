## Portfolio Website

### Overview

A personal portfolio website showcasing different sections about myself, my technical skills, projects, and a contact form. Built using modern web technologies to create a professional and responsive single-page application.

### Sections

* Home
* About Me
* Tech Stack / Experience
* Portfolio
* Contact Me

### Tech Stack

* **Frontend**: HTML / CSS / JavaScript / React + Vite
* **Backend**: Spring Boot / MySQL


### Features

* **CI/CD**

  - GitHub Actions for continuous integration and deployment.
  - Set up workflows to build and test both frontend and backend.

* **User Experience**:
  - Responsive design for desktop and mobile.
  - Intuitive and user-friendly navigation.

### Future Enhancements

- **Advanced Testing**: Implementation of more comprehensive unit and integration tests.
- **Animations**: Enhancing the design with more custom animations and effects.

## Testing Strategy

### Front-End Testing

- **Unit Testing**:
  - **Library**: [Jest](https://jestjs.io/)
  - **Usage**: Used for writing unit tests for individual components and functions.
  - **Example**: Testing if a React component renders correctly or if a function returns expected results.

- **Integration Testing**:
  - **Library**: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
  - **Usage**: Used for testing how various components interact with each other.
  - **Example**: Testing if a user can interact with a form component and see expected results.

- **End-to-End Testing**:
  - **Library**: [Playwright](https://playwright.dev/)
  - **Usage**: Used for testing the application as a whole, simulating user interactions and verifying the application’s behavior.
  - **Example**: Testing if a user can navigate through the site, fill out forms, and see expected results.

### Back-End Testing

- **Unit Testing**:
  - **Library**: [JUnit](https://junit.org/junit5/)
  - **Usage**: Used for writing unit tests for individual service methods and components in the Spring Boot application.
  - **Example**: Testing if a service method processes data correctly.

- **Integration Testing**:
  - **Library**: [Spring Boot Test](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-testing)
  - **Usage**: Used for testing interactions between various components of the Spring Boot application, such as repository interactions.
  - **Example**: Testing if a REST controller correctly interacts with the service layer and returns expected results.

- **Mocking**:
  - **Library**: [Mockito](https://site.mockito.org/)
  - **Usage**: Used for creating mock objects and stubbing methods to test isolated components.
  - **Example**: Mocking a repository to test a service method independently from the database.

# Tutorials

https://www.youtube.com/watch?v=_vOInY6SRVE