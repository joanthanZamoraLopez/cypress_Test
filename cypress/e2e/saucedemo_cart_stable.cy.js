import "cypress-xpath";
describe("Flujo de SauceDemo con tests separados", () => {

  // ---------- LOGIN ANTES DE CADA TEST ----------
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/")
    cy.get("#user-name").type("standard_user")
    cy.get("#password").type("secret_sauce")
    cy.get("#login-button").click()
    cy.url().should("include", "/inventory.html")
    cy.get(".inventory_list").should("be.visible")

  })

it("Agregar productos al carrito con XPath", () => {
  // Usando XPath para seleccionar el botón "Add to cart" del Bolt T-Shirt
  cy.xpath("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']").click()

  // Usando XPath para Backpack
  cy.xpath("//button[@id='add-to-cart-sauce-labs-backpack']").click()

  // Usando XPath para Onesie
  cy.xpath("//button[@id='add-to-cart-sauce-labs-onesie']").click()

  // Assert de la cantidad en el carrito
  cy.get(".shopping_cart_badge").should("contain", "3")
})


  it("Verificar carrito", () => {
    // 🔑 IMPORTANTE: volvemos a agregar productos, porque el carrito se limpia entre tests
    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click()
    cy.get("#add-to-cart-sauce-labs-backpack").click()
    cy.get("#add-to-cart-sauce-labs-onesie").click()

    cy.get(".shopping_cart_link").click()
    cy.url().should("include", "/cart.html")
    cy.get(".cart_item").should("have.length", 3)
  })

  it("Eliminar un producto y realizar checkout", () => {
    // Agregar productos antes de ir al carrito
    cy.get("#add-to-cart-sauce-labs-bolt-t-shirt").click()
    cy.get("#add-to-cart-sauce-labs-backpack").click()

    cy.get(".shopping_cart_link").click()
    cy.get(".cart_item").should("have.length", 2)

    // Eliminar uno
    cy.get(".cart_item").first().find("button").click()
    cy.get(".cart_item").should("have.length", 1)

    // Checkout
    cy.get('[data-test="checkout"]').click()
    cy.url().should("include", "/checkout-step-one.html")

    cy.get('[data-test="firstName"]').type("Juan")
    cy.get('[data-test="lastName"]').type("Lopez")
    cy.get('[data-test="postalCode"]').type("12345")
    cy.get('[data-test="continue"]').click()

    cy.url().should("include", "/checkout-step-two.html")
    cy.get('[data-test="finish"]').click()
    cy.get(".complete-header").should("contain", "Thank you for your order!")
  })
  

  it("Logout", () => {
    cy.get("#react-burger-menu-btn").click()
    cy.get("#logout_sidebar_link").click()
    cy.url().should("include", "/")
  })
})
