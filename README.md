# Cypress Test Automation - Beauty Salon Example

This repository contains automated tests using **Cypress** to validate the functionality of a sample Beauty Salon website.  
The tests are designed following best practices in **UI automation**, including navigation, gallery interaction, contact form submission, and visual element validations.

---

## 🛠 Tools Used

- **[Cypress](https://www.cypress.io/)**: Main end-to-end testing framework for web applications.
- **Node.js**: JavaScript runtime environment for installing and running Cypress.
- **JavaScript / ES6**: Language used to write test scripts.
- **Page Object Pattern (optional)**: Organizes selectors and interaction functions to improve test maintainability.

---

## 📂 Project Structure

```plaintext
cypress/
├── e2e/
│   └── BeautySalon-Test.cy.js       # Login and navigation tests, #Gallery tests,# Contact form tests
│   └── saucedemo_login.cy.js        #Login and navigation test      
│   └── saucedemo_cart_stable.cy.js  #Add,#Delete,#Verify,#Logout        
├── fixtures/
│   └── example.json           # Sample test data
├── support/
│   └── commands.js            # Custom Cypress commands
└── page_objects/
    └── contactPage.js         # Page Object pattern for the contact form
cypress.config.js
package.json

Test Logic and Flow
1. Login / Home Page

Visits the main page.

Verifies that the <h1> header is visible.

Performs scrolling to ensure the page loads correctly.

2. Image Gallery

Navigates to the gallery section.

Iterates through all images in the gallery.

Clicks each image to open it and then closes it via the close button (.cerrar).

Validates that the modal is hidden or removed before moving to the next image.

3. Contact Form

Navigates to the contact section.

Ensures the contact form is visible.

Fills in Name, Email, and Message fields.

Submits the form and validates that a success message is displayed.
