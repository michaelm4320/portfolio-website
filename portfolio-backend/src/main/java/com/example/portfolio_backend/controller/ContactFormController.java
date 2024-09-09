package com.example.portfolio_backend.controller;

import com.example.portfolio_backend.EmailSenderService;
import com.example.portfolio_backend.model.ContactFormSubmissionEntity;
import com.example.portfolio_backend.repository.ContactFormSubmissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import org.springframework.validation.BindingResult;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173") // Replace with your frontend's port
public class ContactFormController {

    @Autowired
    private EmailSenderService emailSenderService;

    @Autowired
    private ContactFormSubmissionRepository contactFormSubmissionRepository;

    @PostMapping
    public String handleContactForm(@Valid @RequestBody ContactFormSubmissionEntity submission, BindingResult result) {
        if (result.hasErrors()) {
            return "Error: " + result.getAllErrors().get(0).getDefaultMessage();
        }

        // Send an email with the form data
        emailSenderService.sendSimpleEmail("michaelmartinez.inquiries@gmail.com",
                submission.getSubject(),
                "Message from: " + submission.getName() + "\n\n" + submission.getMessage());

        // Save to database
        contactFormSubmissionRepository.save(submission);

        return "Form submitted successfully!";
    }
}
