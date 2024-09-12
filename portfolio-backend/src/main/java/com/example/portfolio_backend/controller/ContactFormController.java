package com.example.portfolio_backend.controller;

import com.example.portfolio_backend.EmailSenderService;
import com.example.portfolio_backend.model.ContactFormSubmissionEntity;
import com.example.portfolio_backend.repository.ContactFormSubmissionRepository;
import com.example.portfolio_backend.service.RateLimiterService;
import jakarta.servlet.http.HttpServletRequest;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.annotation.PostConstruct;

// Controller for handling contact form submissions
// Configured to accept requests from localhost and logs reCAPTCHA secret key
@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactFormController {

    private static final Logger logger = LoggerFactory.getLogger(ContactFormController.class);

    @Autowired
    private EmailSenderService emailSenderService;

    @Autowired
    private ContactFormSubmissionRepository contactFormSubmissionRepository;

    @Autowired
    private RateLimiterService rateLimiterService;

    @Value("${recaptcha.secret.key}")
    private String recaptchaSecretKey;

    private final String RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

    @PostConstruct
    public void init() {
        logger.info("Recaptcha Secret Key: {}", recaptchaSecretKey);
    }

    // Handles POST requests for contact form submissions
    // Validates reCAPTCHA token, applies rate limiting, sends email, and saves submission to the database
    @PostMapping
    public ResponseEntity<String> handleContactForm(
            @ModelAttribute ContactFormSubmissionEntity submission,
            @RequestParam("recaptchaToken") String recaptchaToken,
            HttpServletRequest request) {

        String clientId = request.getRemoteAddr();

        logger.info("Received contact form submission: {}", submission);
        logger.info("Received reCAPTCHA token: {}", recaptchaToken);

        // Check rate limit for the client
        if (!rateLimiterService.tryAcquire(clientId)) {
            logger.warn("Rate limit exceeded for IP: {}", clientId);
            return ResponseEntity.status(429).body("Too many requests. Please try again later.");
        }

        // Verify reCAPTCHA token
        if (!verifyRecaptcha(recaptchaToken)) {
            logger.warn("reCAPTCHA verification failed");
            return ResponseEntity.badRequest().body("reCAPTCHA verification failed. Please try again.");
        }

        try {
            // Send email with form data and save to database
            emailSenderService.sendSimpleEmail("michaelmartinez.inquiries@gmail.com",
                    submission.getSubject(),
                    "Message from: " + submission.getName() + "\n\n" + submission.getMessage());

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

        // Verify reCAPTCHA token with Google's API
        String url = RECAPTCHA_VERIFY_URL + "?secret=" + recaptchaSecretKey + "&response=" + recaptchaToken;
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);

        // Parse and return the result of reCAPTCHA verification
        JSONObject jsonObject = new JSONObject(response.getBody());
        boolean success = jsonObject.getBoolean("success");

        logger.info("reCAPTCHA verification result: {}", success);
        return success;
    }
}
