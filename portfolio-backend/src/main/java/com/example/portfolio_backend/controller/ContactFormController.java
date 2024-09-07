package com.example.portfolio_backend.controller;

import com.example.portfolio_backend.EmailSenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")  // Replace with your frontend's port
public class ContactFormController {

    @Autowired
    private EmailSenderService emailSenderService;

    @PostMapping
    public String handleContactForm(@RequestBody ContactFormSubmission submission) {
        // Send an email with the form data
        emailSenderService.sendSimpleEmail("michaelmartinez.inquiries@gmail.com",
                submission.getSubject(),
                "Message from: " + submission.getName() + "\n\n" + submission.getMessage()
        );

        // Optional: Save to database (you can add database logic here if needed)

        return "Form submitted successfully!";
    }
}

class ContactFormSubmission {
    private String name;
    private String email;
    private String subject;
    private String message;

    // Getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
