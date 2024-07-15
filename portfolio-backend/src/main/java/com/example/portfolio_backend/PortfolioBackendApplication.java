package com.example.portfolio_backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

import java.sql.*;

@SpringBootApplication
public class PortfolioBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(PortfolioBackendApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
		return args -> {
			// Call the method to connect to the database
			connectToDatabase();
		};
	}

	private void connectToDatabase() {
		try {
			String password = System.getenv("DB_PASSWORD");
			String username = System.getenv("DB_USERNAME");
			Connection connection = DriverManager.getConnection(
					"jdbc:mysql://127.0.0.1:3306/contact_form_database",
					username,
					password
			);

			Statement statement = connection.createStatement();
			ResultSet resultSet = statement.executeQuery("SELECT * FROM CONTACT_FORM_SUBMISSIONS");

			while (resultSet.next()) {
				System.out.println(resultSet.getString("name") + " / " +
						resultSet.getString("email") + " / " + resultSet.getString("message"));
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
}