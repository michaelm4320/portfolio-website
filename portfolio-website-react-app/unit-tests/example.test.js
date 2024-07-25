import { describe, it, expect } from 'vitest';

describe('Example Test Suite', () => {
  it('should add numbers correctly', () => {
    const sum = (a, b) => a + b;
    expect(sum(1, 2)).toBe(3);
  });
});