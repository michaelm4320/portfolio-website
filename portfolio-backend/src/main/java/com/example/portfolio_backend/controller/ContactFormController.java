package com.example.portfolio_backend.controller;

import com.example.portfolio_backend.EmailSenderService;
import com.example.portfolio_backend.model.ContactFormSubmissionEntity;
import com.example.portfolio_backend.repository.ContactFormSubmissionRepository;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactFormController {

    private static final Logger logger = LoggerFactory.getLogger(ContactFormController.class);

    @Autowired
    private EmailSenderService emailSenderService;

    @Autowired
    private ContactFormSubmissionRepository contactFormSubmissionRepository;

    private final String RECAPTCHA_SECRET_KEY = "";
    private final String RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

    @PostMapping
    public ResponseEntity<String> handleContactForm(
            @ModelAttribute ContactFormSubmissionEntity submission,
            @RequestParam("recaptchaToken") String recaptchaToken) {

        logger.info("Received contact form submission: {}", submission);
        logger.info("Received reCAPTCHA token: {}", recaptchaToken);

        // Verify reCAPTCHA token
        if (!verifyRecaptcha(recaptchaToken)) {
            logger.warn("reCAPTCHA verification failed");
            return ResponseEntity.badRequest().body("reCAPTCHA verification failed. Please try again.");
        }

        try {
            // Send an email with the form data
            emailSenderService.sendSimpleEmail("michaelmartinez.inquiries@gmail.com",
                    submission.getSubject(),
                    "Message from: " + submission.getName() + "\n\n" + submission.getMessage());

            // Save to database
            contactFormSubmissionRepository.save(submission);

            logger.info("Form submitted successfully");
            return ResponseEntity.ok("Form submitted successfully!");
        } catch (Exception e) {
            logger.error("Error processing form submission", e);
            return ResponseEntity.internalServerError().body("An error occurred while processing your submission.");
        }
    }

    private boolean verifyRecaptcha(String recaptchaToken) {
        RestTemplate restTemplate = new RestTemplate();

        // Prepare request parameters
        String url = RECAPTCHA_VERIFY_URL + "?secret=" + RECAPTCHA_SECRET_KEY + "&response=" + recaptchaToken;

        // Make the request to the reCAPTCHA verification endpoint
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

        // Parse the JSON response
        JSONObject jsonObject = new JSONObject(response.getBody());
        boolean success = jsonObject.getBoolean("success");

        logger.info("reCAPTCHA verification result: {}", success);
        return success;
    }
}