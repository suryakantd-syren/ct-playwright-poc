## Playwright JS Accelerator with Behaviour Driven Development(BDD)

## Features

- Integration with Playwright.js for browser automation
- Behaviour Driven Development(BDD) support for writing test cases
- HTML report support for the test result visualization
- Page Object Model(POM) support for maintaining test scripts.
- Integration with Cucumber.io for BDD scenario
- Parallel execution support for faster test runs
- Cross-browser support for testing accross different browser
- Command-line parameter support for felxibility in test execution

## Getting started

### Prerequisite:

1. NodeJs should be installed on a machine.
2. Cucumber(Gherkin) extension should be installed in VSCode
3. NPM(Node Package Manager) installed in your machine

## To execute the automation suite

- Clone this repo

  - `git clone ssh://git@sourcefront.syncsort.com/pem/pem20.git`
  - navigate to directory `pem-ui/apps/sanity`
  - install dependencies: `npm install`
  - install playwright browsers : `npx playwright install`

- Execute tests

  1. `test -- --headed --project=chromium` Run all tests in the QA environment with HTML report
  2. `test-current -- --headed --project=chromium <your_feature_file_path>` Run specific feature file tests in the QA environment with HTML report
  3. `npx playwright show-report` to open BDD HTML report

- Changes related to windows machine:

  In the `package.json` file, ensure that `export` is replaced with `set` in the scripts for Windows compatibility.

### Test data passing to test cases:

- Test data to the test cases is passed using .json and they are present under the test_data folder
- All the baseUrl's are passed into DataConstants.js file and the configuration is handled inside playwright.config.js file
- Feature files are present under bdd\features folder.
- Step definition files are present under bdd\steps folder

## Folder Structure:

- features: Stores all the Feature files in it
- support/step_definitions: Store all step definition files
- support/page_objects: Uses to write all reusable methods. Here we can add page objects and step definitions
- utils: Stores Data constants and reusable utilities for example to read test data and parse it.
- package.json: uses to add any dependency which are required
- test_data: json data to be used for automation testing

## Playwright and BDD Overview

- Playwright is a JS based UI automation tool which allows user to automate application effectively and easily.
- Playwright is very fast as compared to other tools and allows us to execute it on multiple browsers in parallel
- Can be integrated with different types of reporting tools.
- Playwright also have capability to capture screenshot and videos automatically.
- BDD is a collaborative software development process that encourages communication among developers, QA and non-technical stakeholders using natural lanagude specification
