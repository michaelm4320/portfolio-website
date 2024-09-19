package com.example.portfolio_backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@RestController
public class HomeController {
    private static final String FILE_PATH = "/home/ubuntu/counter.txt";

    @GetMapping("/")
    public void incrementVisitCount() throws IOException {
        File file = new File(FILE_PATH);
        if (!file.exists()) {
            file.createNewFile();
            Files.write(Paths.get(FILE_PATH), "0".getBytes());
        }

        // Read and increment the count
        int count = Integer.parseInt(new String(Files.readAllBytes(Paths.get(FILE_PATH))));
        count++;
        Files.write(Paths.get(FILE_PATH), String.valueOf(count).getBytes());
    }
}
