// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Comando para login estable
Cypress.Commands.add('login', (username = 'standard_user', password = 'secret_sauce') => {
  cy.visit('https://www.saucedemo.com/')

  cy.get('#user-name').type(username)
  cy.get('#password').type(password)
  cy.get('#login-button').click()

  // Esperar a que la URL cambie y los productos estén visibles
  cy.url({ timeout: 10000 }).should('include', '/inventory.html')
  cy.get('.inventory_item', { timeout: 10000 }).should('be.visible')
})

// Comando para agregar productos al carrito
Cypress.Commands.add('addToCart', (indexes = [0]) => {
  indexes.forEach(i => {
    cy.get('.inventory_item', { timeout: 10000 }).eq(i).find('button').click()

  })
})
