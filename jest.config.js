/** @type {import('jest').Config} */
/* eslint-disable no-undef */
module.exports = {
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest", // Isso garante que o Babel será usado para arquivos .jsx e .tsx
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/src/styleMock.js",
  },
  globals: {
    jest: true,
    test: true,
    expect: true,
    describe: true,
    beforeEach: true,
    afterEach: true,
    beforeAll: true,
    afterAll: true,
  },
};
