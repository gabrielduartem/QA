import { Given, When, Then, And } from "cypress-cucumber-preprocessor/Steps";

//CT01 - Adicionar produto disponível ao carrinho

Given("o usuário está na página inicial", () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
})

And("o produto 'HTC Touch HD' aparece na lista de produtos", () => {
    cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > [name="search"]').type("HTC Touch HD");
    cy.get('.type-text').click();
    cy.wait(2000)
})

When("ele clica em 'Add to Cart' no produto 'HTC Touch HD'", () => {
  cy.get('#mz-product-grid-image-53-212469 > .carousel-inner > .active > .lazy-load').invoke("show")
  cy.wait(1000)

})

/*And("clica no botão Login", () => {
    cy.get('form > .btn').click()
})

Then("deve entrar na conta e aparecer My account", () => {
   cy.get(':nth-child(1) > .card-header').should("have.text", "My Account")
})*/