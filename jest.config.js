/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // A list of paths to modules that run some code to
  // configure or set up the testing framework before
  // each test file in the suite is executed
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
};
