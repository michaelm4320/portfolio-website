package com.example.portfolio_backend;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Properties;

@Configuration
public class MailConfig {

    // Bean configuration for JavaMailSender
    @Bean
    public JavaMailSender javaMailSender() {
        // Create and configure JavaMailSenderImpl instance
        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
        mailSender.setHost("smtp.gmail.com"); // Set the SMTP server host
        mailSender.setPort(587); // Set the SMTP server port (TLS/STARTTLS)

        mailSender.setUsername(System.getenv("MAIL_USERNAME"));
        mailSender.setPassword(System.getenv("MAIL_PASSWORD"));

        // Configure mail properties
        Properties props = mailSender.getJavaMailProperties();
        props.put("mail.transport.protocol", "smtp"); // Use SMTP protocol
        props.put("mail.smtp.auth", "true"); // Enable SMTP authentication
        props.put("mail.smtp.starttls.enable", "true"); // Enable STARTTLS for secure connections
        props.put("mail.debug", "true"); // Enable debugging output (set to false in production)

        return mailSender; // Return configured JavaMailSender instance
    }
}
