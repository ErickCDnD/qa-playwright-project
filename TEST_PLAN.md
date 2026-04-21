# Test Plan – TodoMVC Application (Playwright Automation)

## 1. Objective

The objective of this test plan is to validate the core functionality of the TodoMVC web application using automated tests built with Playwright. The focus is on ensuring that critical user flows function correctly and reliably.

---

## 2. Scope

### In Scope:

- Application accessibility (homepage load)
- UI validation of key elements
- Basic functional validation of core components

### Out of Scope:

- Performance and load testing
- Security testing
- Cross-browser compatibility (future enhancement)
- Edge case validation

---

## 3. Test Strategy
- Testing Type: UI Automation Testing
- Framework: Playwright with TypeScript
- Approach:
    - Validate critical user flows first
    - Use assertions to verify UI state
    - Keep tests independent and reproducible

---

## 4. Test Environment
- Node.js environment
- Playwright Test Framework
- Browsers: Opera
- Base URL:
https://demo.playwright.dev/todomvc

---

## 5. Test Scenarios

| ID | Scenario | Description |
| -------- | -------- | -------- |
| TS-01 | Homepage Load | Verify that the application loads successfully |
| TS-02 | UI Validation | Verify that key UI elements are displayed |

---

## 6. Test Cases

### TC-01: Verify Homepage Loads Successfully
- Navigate to application URL
- Validate that the main header is visible
- Expected Result:
    - Page loads successfully
    - Header displays “todos”

### TC-02: Verify Homepage Loads Successfully
- Navigate to application URL
- Validate that the main header is visible
- Expected Result:
    - Page loads successfully
    - Header displays “todos”

### TC-03: Verify Homepage Loads Successfully
- Navigate to application URL
- Verify which object is pulled when the title is fetched
- Expected Result:
    - TodoMVC

---

## 7. Test Data
- Static URL: TodoMVC demo application
- Expected UI text: “todos”, "TodoMVC"

---

## 8. Execution
Tests are executed using:
```bash
npx playwright test
```

---

## 9. Reporting

Playwright generates:
- HTML test report
- Screenshots on failure
- Video recordings
- Execution logs

---

## 10. Defect Analysis
During execution, the following issues were identified:
- Incorrect base URL configuration leading to 404 page
- Assertion mismatch due to incorrect expected title
These were resolved by updating the configuration and improving validation strategy.

---

## 11. Risks & Limitations
- Limited test coverage due to time constraints
- Only one browser tested
- Minimal test data variation

---

## 12. Future Improvements
- Implement CRUD test scenarios
- Add API validation
- Integrate CI/CD pipeline
- Expand cross-browser testing
- Improve test data management