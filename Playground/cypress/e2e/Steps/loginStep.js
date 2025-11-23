import { Given, When, Then, And } from "cypress-cucumber-preprocessor/Steps";

//CT 01 - Usuário faz login com credenciais válidas

Given("que o usuário acessa a página de login", () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
})

When("ele preenche os campos com requisitos válidos", () => {
    cy.get('[name="email"]').type("joaosilvaqa@gmail.com");
    cy.get('[name="password"]').type("Senha123");
})

And("clica no botão Login", () => {
    cy.get('form > .btn').click()
})

Then("deve entrar na conta e aparecer My account", () => {
   cy.get(':nth-child(1) > .card-header').should("have.text", "My Account")
})

//CT 02 - Usuário tenta fazer login com senha incorreta

Given("que o usuário acessa a página de login", () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
})

When("ele preenche o campo de e-mail com um e-mail válido", () => {
    cy.get('[name="email"]').type("joaosilvaqa@gmail.com");
})

And("preenche o campo de senha com uma senha incorreta",() => {
     cy.get('[name="password"]').type("Senha");
})

And("clica no botão Login", () => {
    cy.get('form > .btn').click()
})

Then("deve exibir a mensagem Senha incorreta", () => {
   cy.get('#account-login > .alert').should("have.text", " Warning: No match for E-Mail Address and/or Password.")
})

//CT 03 - Usuário tenta fazer login com e-mail não cadastrado

Given("que o usuário acessa a página de login", () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
})

When("ele preenche o campo de e-mail com um e-mail não cadastrado", () => {
    cy.get('[name="email"]').type("joaosilvaqa@teste");
})

And("preenche o campo de senha com uma senha qualquer",() => {
     cy.get('[name="password"]').type("Senha");
})

And("clica no botão Login", () => {
    cy.get('form > .btn').click()
})

Then("deve exibir a mensagem Usuário não encontrado", () => {
   cy.get('#account-login > .alert').should("have.text", " Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.")
})



//CT 04 - Usuário tenta fazer login sem preencher os campos obrigatórios

Given("que o usuário acessa a página de login", () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
})

When("ele deixa os campos de e-mail e senha em branco", () => {
    cy.get('[name="email"]')
    cy.get('[name="password"]')
})

And("clica no botão Login", () => {
    cy.get('form > .btn').click()
})

Then("deve exibir mensagens de obrigatoriedade nos campos", () => {
   cy.get('#account-login > .alert').should("have.text", " Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.")
})



//CT 05 - Usuário tenta fazer login com senha incorreta

Given("que o usuário acessa a página de login", () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=account/login')
})

When("ele preenche o campo de e-mail com joao#teste.com", () => {
    cy.get('[name="email"]').type("joao#teste.com");
})

And("preenche o campo de senha com uma senha válida", () => {
    cy.get('[name="password"]').type("Senha123");
})

And("clica no botão Login", () => {
    cy.get('form > .btn').click()
})

Then("deve exibir a mensagem Formato de e-mail inválido", () => {
   cy.get('#account-login > .alert').should("have.text", " Warning: No match for E-Mail Address and/or Password.")
})