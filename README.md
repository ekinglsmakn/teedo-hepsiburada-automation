# Hepsiburada Automation Project

This project includes web and mobile automation test scenarios for Hepsiburada.

## Technologies

- Playwright
- TypeScript
- Maestro

## Web Automation Scope

- Guest user adds product to cart without login
- Cart validation
- Page Object Model (POM) structure

## Project Structure

```bash
pages/
tests/
MOBILE/
```

## Mobile Automation

Mobile automation scenarios were created using Maestro.

File:

```bash
MOBILE/add-to-cart.yaml
```

## Run Web Tests

```bash
npx playwright test --headed
```

## Author

Ekin A.
