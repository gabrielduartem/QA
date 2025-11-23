import { Given, When, Then, And } from "cypress-cucumber-preprocessor/Steps";

//CT 01 - Usuário faz cadastro com credenciais válidas

Given("que o usuário acessa a página de cadastro", () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
})

When("ele preenche os campos com os requisitos válidos", () => {
    cy.get('[name="firstname"]').type("João");
    cy.get('[name="lastname"]').type("Silva");
    cy.get('[name="email"]').type("joaosilvaqa@gmail.com");
    cy.get('[name="telephone"]').type("11999999999");
    cy.get('[name="password"]').type("Senha123");
    cy.get('[name="confirm"]').type("Senha123");
    cy.get('.float-right > .custom-control').click();
    
})

And("clica no botão continue", () => {
    cy.get('.float-right > .btn').click()
})

Then("deve entrar na conta e aparecer os produtos", () => {
    cy.get('#account-register > .alert').should("have.text", " Warning: E-Mail Address is already registered!")

})

//CT 02 - Usuário tenta se cadastrar sem preencher todos os campos obrigatórios

Given("que o usuário acessa a página de cadastro", () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
})

When("ele deixa um ou mais campos obrigatórios em branco", () => {
    cy.get('[name="firstname"]').type("João");
    cy.get('[name="lastname"]');
    cy.get('[name="email"]').type("joaosilvaqa2@gmail.com");
    cy.get('[name="telephone"]');
    cy.get('[name="password"]').type("Senha123");
    cy.get('[name="confirm"]').type("Senha123");
    cy.get('.float-right > .custom-control').click();
    
})

And("clica no botão continue", () => {
    cy.get('.float-right > .btn').click()
})


Then("deve ser exibida uma mensagem de alerta informando que todos os campos devem ser preenchidos", () => {
     cy.get(':nth-child(4) > .col-sm-10 > .text-danger').should("have.text", "Last Name must be between 1 and 32 characters!")
})

//CT 03 - Usuário tenta se cadastrar com e-mail em formato inválido

Given("que o usuário acessa a página de cadastro", () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/register')
})

When("ele preenche todos os campos com email errado", () => {
    cy.get('[name="firstname"]').type("João");
    cy.get('[name="lastname"]').type("Silva");
    cy.get('[name="email"]').type("usuario@teste");
    cy.get('[name="telephone"]').type("11999999999");
    cy.get('[name="password"]').type("Senha123");
    cy.get('[name="confirm"]').type("Senha123");
    cy.get('.float-right > .custom-control').click();
    
})

And("clica no botão continue", () => {
    cy.get('.float-right > .btn').click()
})


Then("deve ser exibida uma mensagem de erro informando que o e-mail é inválido", () => {
     cy.get('.text-danger').should("have.text", "E-Mail Address does not appear to be valid!")
})

