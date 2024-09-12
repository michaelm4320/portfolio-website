package com.example.portfolio_backend.repository;

import com.example.portfolio_backend.model.ContactFormSubmissionEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactFormSubmissionRepository extends JpaRepository<ContactFormSubmissionEntity, Long> {
    // Used for CRUD operations, needed to use the save method to create new database submissions
}
