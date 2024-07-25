package com.example.portfolio_backend;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class GreetingServiceTest {

    @Autowired
    private GreetingService greetingService;

    @Test
    public void testGreeting() {
        String result = greetingService.greet("Michael");
        assertThat(result).isEqualTo("Hello, Michael");
    }
}
