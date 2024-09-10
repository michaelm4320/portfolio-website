package com.example.portfolio_backend.service;

import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;
import com.google.common.util.concurrent.RateLimiter;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

@Service
public class RateLimiterService {

    private final LoadingCache<String, RateLimiter> rateLimiters = CacheBuilder.newBuilder()
            .expireAfterAccess(1, TimeUnit.MINUTES)
            .build(new CacheLoader<String, RateLimiter>() {
                @Override
                public RateLimiter load(String key) {
                    return RateLimiter.create(2.0 / 60.0); // 2 requests per minute or (24.0 * 60.0 * 60.0)); // per day
                }
            });

    public boolean tryAcquire(String clientId) {
        try {
            RateLimiter rateLimiter = rateLimiters.get(clientId);
            return rateLimiter.tryAcquire();
        } catch (Exception e) {
            // Log the exception
            return false;
        }
    }
}