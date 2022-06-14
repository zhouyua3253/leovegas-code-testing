const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",

  // A map from regular expressions to module names or to arrays of module names
  // that allow to stub out resources, like images or styles with a single
  // module. Modules that are mapped to an alias are unmocked by default,
  // regardless of whether automocking is enabled or not.
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/src/utils/__mocks__/svgrMock.js",
    "^@Components/(.*)": "<rootDir>/src/components/$1",
    "^@Constants/(.*)": "<rootDir>/src/constants/$1",
    "^@Hooks/(.*)": "<rootDir>/src/hooks/$1",
    "^@Utils/(.*)": "<rootDir>/src/utils/$1",
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
