import type { Config } from 'jest';
import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  "collectCoverageFrom": [
    "**/src/*.{ts,tsx,js,jsx}",
  ],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/',
  },
  modulePaths: ['<rootDir>/src/'],
};

export default createJestConfig(config);
