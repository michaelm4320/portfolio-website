package com.example.portfolio_backend;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService {

    private final JavaMailSender mailSender;

    // Constructor injection for JavaMailSender dependency
    public EmailSenderService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    // Send a simple email with specified recipient, subject, and body
    public void sendSimpleEmail(String toEmail,
                                String subject,
                                String body) {
        // Create a new SimpleMailMessage object
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(System.getenv("MAIL_USERNAME")); // Set the sender's email address from environment variable
        message.setTo(toEmail); // Set the recipient's email address
        message.setText(body); // Set the email body
        message.setSubject(subject); // Set the email subject
        mailSender.send(message); // Send the email using JavaMailSender
        System.out.println("Mail Sent..."); // Log email sent status
    }
}
