# Playwright Test Automation – TodoMVC

## Overview
This project demonstrates a basic **test automation framework** built from scratch using **Playwright with TypeScript**.

The goal was to design and implement a minimal but scalable testing solution while following QA best practices, including:
- Test planning
- Environment setup
- Test execution
- Debugging and failure analysis

The application under test is the public **TodoMVC demo app**, which provides a simple CRUD interface for task management.

---

## Objectives
- Validate that the application loads correctly
- Verify key UI elements are displayed
- Establish a foundation for scalable test automation

---

## Tech Stack
- **Framework:** Playwright  
- **Language:** TypeScript  
- **Runtime:** Node.js  
- **Reporting:** Playwright HTML Reports  

---

## Getting Started

### 1. Clone the repository
```bash
git clone <https://github.com/ErickCDnD/qa-playwright-project>
cd qa-playwright-project

### 2. Install dependencies
npm install

### 3. Install Playwright browsers
npx playwright install

### 4. Run tests
npx playwright test

### 5. View test report
npx playwright show-report
```

---

## Aplication Under Test
https://demo.playwright.dev/todomvc

---

## Test Coverage
### Current Tests
- Homepage load validation
- UI verification (main header)

## Debugging & Findings
During development, several issues were identified and resolved:

- Incorrect Playwright initialization command
- Misconfigured baseURL leading to 404 page
- Assertion mismatch due to incorrect title expectation

These were resolved through:

- Reviewing error messages
- Using Playwright reports (screenshots, videos)
- Adjusting configuration and assertions

---

## Reporting
Playwright automatically generates:
- Screnshots on failure
- Video recordings
- Execution traces
These artifacts were used to analyze and debug test failures.

## Documentation
- Test Plan: See TEST_PLAN.md
- Learning Notes / Debugging Process: See LEARNING_NOTES.md

## Key Learnings
- Importance of correct environment configuration
- Difference between test failures and application issues
- Value of assertions in validating behavior
- Using Playwright debugging tools effectively

## Limitations
- Limited test coverage (focused on initial setup)
- Single environment and browser
- Minimal test data variation

## Author
Erick Eduardo Cuello Garcia

## Final Note
This project focuses not only on automation, but on demonstrating a complete QA workflow, including planning, execution, debugging and continuous improvement.