/* eslint-disable no-undef */
// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const { defineBddConfig } = require('playwright-bdd');
import dotenv from 'dotenv';
import path from 'path';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */

let testDir;
let timeoutVal = 15 * 60 * 1000;

if (process.env.testType && process.env.testType.toLowerCase() == "smoke") {
  testDir = defineBddConfig({
    paths: ['smokeFeatures/**/*.{feature,feature.md}'],
    require: ['support/step_definitions/**/*.js']
  });
  timeoutVal = 5 * 60 * 1000;
}
else {
  testDir = defineBddConfig({
    paths: ['features/**/*.{feature,feature.md}'],
    require: ['support/step_definitions/**/*.js']
  });
}
const environment = process.env.runEnv ? process.env.runEnv.trim() : "qa";
dotenv.config({ path: path.resolve(__dirname, "env_files", `${environment?.toLowerCase()}.env`) });

const screenshotValue = (process.env.testType && process.env.testType.toLowerCase() == "flagler") ? "on" : "only-on-failure";
const videoValue = (process.env.testType && process.env.testType.toLowerCase() == "smoke") ? "retain-on-failure" : "on";

module.exports = defineConfig({
  timeout: timeoutVal,
  expect: {
    timeout: 80 * 1000
  },
  // testDir: './tests',
  testDir, // <- generated BDD tests
  /* Run tests in files in parallel */
  fullyParallel: process.env.fullyParallel == "false" ? false : true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 9 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter:
    [['html', { open: 'never' }],
    ['junit', { outputFile: 'junit-reports/results.xml' }],
    ['line'],
    ['allure-playwright', {
      detail: true,
      outputFolder: "allure-results",
      suiteTitle: false,
      environmentInfo: {
        E2E_NODE_VERSION: process.version,
        E2E_OS: process.platform,
        E2E_RUNENV: environment
      },
    },]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    actionTimeout: 40 * 1000,
    navigationTimeout: 2 * 60 * 1000,
    //trace: "off",
    trace: "retain-on-failure",
    ignoreHTTPSErrors: true,
    screenshot: screenshotValue,
    video: videoValue
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome HiDPI'],
        viewport: { width: 1728, height: 900 },
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        viewport: { width: 1728, height: 900 },
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1728, height: 900 },
      },
    },

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: { ...devices["Galaxy S9+"] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 13'] },
    }
  ]
});