# Playwright POM Automation Framework 🚀

A modern, maintainable end-to-end automation testing framework built using **Playwright** and **JavaScript**. This repository demonstrates industry-standard testing patterns tailored for an E-Commerce application web stack.

## 🎯 Project Purpose & Intent
This portfolio project showcases clean framework design, resilient element selection mechanics, and data-driven automation behaviors. It is architected to mirror real-world regression suites used by QA engineering teams.

---

## 🛠️ Tech Stack & Core Tools
* **Automation Engine:** Playwright (v1.x)
* **Language Runtime:** Node.js / JavaScript (ES6+)
* **Design Pattern:** Page Object Model (POM)
* **Execution Core:** Playwright Test Runner

---

## 🏗️ Framework Architecture

The codebase follows the **Page Object Model (POM)** design pattern to cleanly decouple application layout definitions from test flow sequences. This ensures high maintainability and prevents test fragility.

```text
├── data/                  # Dynamic JSON data configurations
│   └── users.json         # Profiles for Data-Driven Testing (DDT)
├── pages/                 # Page Object classes (UI Blueprints)
│   ├── LoginPage.js       # Authentication locators & interactions
│   └── InventoryPage.js   # Catalog items & cart verification elements
├── tests/                 # Functional & Regression test suites
│   └── logindemo.spec.js  # Automated E2E verification scenarios
├── .gitignore             # Exclusions for dependencies & local reports
├── playwright.config.js   # Browser engines & screenshot/video setups
└── README.md              # Technical documentation profile
```

---

## 💡 Key Engineering Features Implemented

* **Page Object Model (POM):** Encapsulated page locators and operational methods into dedicated classes, decreasing maintenance overhead when UI layouts shift.
* **Data-Driven Testing (DDT):** Configured automated execution flows to dynamically loop over distinct application profiles (e.g., standard, locked-out, and performance-restricted user profiles) via external JSON schemas.
* **Resilient Element Targeting:** Utilized robust, unique selectors (`#id` bindings) and strict user-centric strategies to avoid fragile CSS or absolute XPaths.
* **Automated Failure Artifacts:** Configured contextual settings to automatically capture visual screenshots and record functional video traces on unexpected runtime errors.

---

## 🚀 Local Setup & Execution Guide

Follow these sequential steps to initialize the environment and execute the automation suite locally:

### 1. Prerequisites
Ensure you have **Node.js** installed on your computer.

### 2. Installation
Clone the repository and install the project dependencies:
```bash
git clone https://github.com
cd Playwright_POM
npm install
```

### 3. Install Target Test Browsers
Download the required Playwright browser configurations:
```bash
npx playwright install chromium
```

### 4. Running the Automation Suites

* **Run all tests in Headless Mode (Fastest):**
  ```bash
  npx playwright test
  ```

* **Run tests in Headless Mode and see the live browser window:**
  ```bash
  npx playwright test --headed
  ```

* **Launch the Interactive Playwright UI Mode:**
  ```bash
  npx playwright test --ui
  ```

---

## 📊 Test Reporting
Upon completion of a local test run, generate and view the interactive HTML verification report using:
```bash
npx playwright show-report
```

