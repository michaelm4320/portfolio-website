package com.example.portfolio_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import javax.sql.DataSource;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
@EnableJpaRepositories(basePackages = "com.example.portfolio_backend.repository")
public class PortfolioBackendApplication {

    @Autowired
    private EmailSenderService emailSenderService;

    // Entry point for the Spring Boot application
    public static void main(String[] args) {
        SpringApplication.run(PortfolioBackendApplication.class, args);
    }

    // Primary bean for configuring the DataSource
    @Primary
    @Bean
    public DataSource dataSource() {
        return DataSourceBuilder
                .create()
                .url("jdbc:mysql://localhost:3306/contact_form_database?useSSL=false&serverTimezone=UTC") // Database URL
                .username(System.getenv("DB_USERNAME")) // Username from environment variables
                .password(System.getenv("DB_PASSWORD")) // Password from environment variables
                .driverClassName("com.mysql.cj.jdbc.Driver") // MySQL JDBC driver
                .build();
    }

    // Bean to run code at application startup
    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {
            sendTestEmail(); // Send a test email after application startup
        };
    }

    // Method to send a test email
    private void sendTestEmail() {
        emailSenderService.sendSimpleEmail("michaelmartinez.inquiries@gmail.com", "Test Email Subject", "This is a test email body.");
    }
}