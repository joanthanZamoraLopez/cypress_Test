describe('Login en SauceDemo', () => {
  it('Debería iniciar sesión correctamente con usuario estándar', () => {
    // Abrir la página
    cy.visit('https://www.saucedemo.com/')

    // Ingresar usuario y contraseña
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')

    // Hacer click en login
    cy.get('#login-button').click()

    // Verificar que estamos en la página de productos
    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt')
      .should('be.visible')    // asegurarse que está visible
      .and('not.be.disabled')  // asegurarse que no esté deshabilitado
      .click()
  })
  // it('Agregar productos al carrito', () => {
  //   cy.get('#add-to-cart-sauce-labs-bolt-t-shirt')
  //     .should('be.visible')    // asegurarse que está visible
  //     .and('not.be.disabled')  // asegurarse que no esté deshabilitado
  //     .click()

 
  // })

  // it('Debería mostrar error con usuario incorrecto', () => {
  //   cy.visit('https://www.saucedemo.com/')
  //   cy.get('#user-name').type('usuario_incorrecto')
  //   cy.get('#password').type('contraseña_incorrecta')
  //   cy.get('#login-button').click()

  //   // Verificar mensaje de error
  //   cy.get('[data-test="error"]').should('contain', 'Epic sadface')
  // })

  
})
