package com.example.portfolio_backend.service;

import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;
import com.google.common.util.concurrent.RateLimiter;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

@Service
public class RateLimiterService {

    // Cache to store rate limiters for different clients, with a 1-minute expiration policy
    private final LoadingCache<String, RateLimiter> rateLimiters = CacheBuilder.newBuilder()
            .expireAfterAccess(1, TimeUnit.MINUTES) // Cache expires after 1 minute of inactivity
            .build(new CacheLoader<String, RateLimiter>() {
                @Override
                public RateLimiter load(String key) {
                    // Create a RateLimiter that allows 2 requests per minute
                    return RateLimiter.create(2.0 / 60.0); // 2 requests per minute or (24.0 * 60.0 * 60.0))
                }
            });

    // Attempt to acquire a permit for the given client ID
    public boolean tryAcquire(String clientId) {
        try {
            RateLimiter rateLimiter = rateLimiters.get(clientId); // Retrieve or create a RateLimiter for the client
            return rateLimiter.tryAcquire(); // Attempt to acquire a permit
        } catch (Exception e) {
            // Handle exceptions (e.g., logging)
            return false; // Return false if acquisition fails
        }
    }
}
