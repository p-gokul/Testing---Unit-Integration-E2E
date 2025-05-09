# 🧪 Testing --- Unit, Integration, End-to-End

Full-Stack Todo App — Testing Suite

- ✅ <span style="color:blue">**Jest**</span> for Unit and Integration Testing
- 🎯 <span style="color:blue">**Playwright**</span> for End-to-End Testing (E2E)

## 📁 Folder Structure

```
|-- E2E-tests-using-Playwright
|   |-- tests
|       |-- todo-crud.spec.ts         # E2E tests for CRUD operations
|       |-- todo-form.spec.ts         # E2E tests for form validation/UI
|
|-- backend
|   |-- src/
|   |-- tests
|       |-- integration-tests
|       |   |-- index.test.js         # API integration tests
|       |-- unit-tests
|           |-- index.test.js         # Unit tests for backend functions
|
|-- frontend
    |-- src/                          # React/Vite frontend source
```

## 🚀 How to Run Tests

### ⚙️ 1. Install Dependencies

Inside each directory:

```bash
bun install
```

Ensure all necessary dependencies for both backend and frontend are installed.

---

### 🧪 2. Run Unit & Integration Tests (Backend)

From the `backend` folder:

```
cd backend
```

Run tests

```bash
bun test
```

> This runs all tests under:
>
> - `backend/tests/unit-tests`
> - `backend/tests/integration-tests`

---

### 🎭 3. Run End-to-End Tests (Playwright)

- Make sure frontend and backend are running.

From `E2E-tests-using-Playwright` folder:

#### Install Playwright browsers:

```bash
bun install
```

#### Run all E2E tests in headless mode:

```bash
bunx playwright test
```

#### Run E2E tests with UI mode:

```bash
bunx playwright test --ui
```

#### Run in headed mode for visual debugging:

```bash
bunx exec playwright test --headed
```

---

## 📦 Project Prerequisites

Ensure the following are installed:

- [Node.js](https://bun.sh/) (v18+ recommended)
- [bun](https://bun.sh/) (package manager)
- [Playwright](https://playwright.dev/)
- [Jest](https://jestjs.io/)

---

## ✅ Best Practices Followed

- Unit tests for isolated backend logic
- Integration tests for backend API endpoints
- E2E tests simulating real user actions in browser
- Separated test folders for better organization

---
