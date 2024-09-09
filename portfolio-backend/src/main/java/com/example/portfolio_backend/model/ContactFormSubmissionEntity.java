package com.example.portfolio_backend.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;

import java.time.LocalDateTime;

@Entity
@Table(name = "contact_form_submissions")
public class ContactFormSubmissionEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "Name cannot be empty")
    private String name;

    @Email(message = "Email should be valid")
    @NotEmpty(message = "Email cannot be empty")
    private String email;

    @NotEmpty(message = "Subject cannot be empty")
    private String subject;

    @NotEmpty(message = "Message cannot be empty")
    private String message;

    @Column(name = "submitted_at")
    private LocalDateTime submittedAt = LocalDateTime.now();

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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

    public LocalDateTime getSubmittedAt() {
        return submittedAt;
    }

    public void setSubmittedAt(LocalDateTime submittedAt) {
        this.submittedAt = submittedAt;
    }
}
