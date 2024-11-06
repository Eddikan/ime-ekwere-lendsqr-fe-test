// jest.config.ts
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jsdom', // Ensures a browser-like environment
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)', // Any __tests__ folder with .ts or .tsx files
    '**/?(*.)+(spec|test).[jt]s?(x)', // Include test files with .ts/.tsx
  ],
};

export default createJestConfig(customJestConfig);
