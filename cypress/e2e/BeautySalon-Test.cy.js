import "cypress-plugin-tab";


describe('Beauty salon Gallery Test', () => {
  beforeEach(() => {
    cy.visit("https://beautysalonexample.netlify.app/")
  })

  it("Login", () => {
    cy.get("h1").should("be.visible")
    cy.wait(1500)
    cy.get("h4").scrollIntoView()
    cy.wait(1500)
    cy.scrollTo("top")
  })

  it("Galeria", () => {
    cy.contains('a', 'Galeria').click()
    cy.get('.galeria', { timeout: 5000 }).should('be.visible')
    cy.get('.galeria img').each(($img) => {
      cy.wrap($img).scrollIntoView().should('be.visible').click()

      // Espera a que se abra el modal
      cy.wait(500)

      // Cierra la imagen (botón con clase .cerrar)
      cy.get('.cerrar').should('be.visible').click()

      // Verifica que el modal ya no existe antes de pasar a la siguiente imagen
      cy.get('.cerrar').should('not.be.visible')
    })
  })

  it("Formulario llenado con tab", () => { 
    cy.contains("a", "Contacto").click()
    cy.get("h2").should("be.visible")

    cy.get('input[name="nombre"]')
      .type("Jonathan Lopez")
      .tab() // Salta al email
      .type("juan@example.com")
      .tab() // Salta al asunto
      .type("Agendar una cita")
      .tab() // Salta al mensaje
      .type("Hola, me interesa el servicio de belleza.")

    cy.get(".btn-enviar").click()
  })
})
