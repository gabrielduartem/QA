describe('Testando a funcionalidade de Cadastro', () => {




  it('CT001 - Cadastro Válido', () => {

    cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
    cy.get('#widget-navbar-217834 > .navbar-nav > :nth-child(6) > .nav-link > .info > .title').click();
    cy.get('.card-body > .btn').click();
    cy.get('[name="firstname"]').type("João");
    cy.get('[name="lastname"]').type("Silva");
    cy.get('[name="email"]').type("joaosilvaqa1@gmail.com");
    cy.get('[name="telephone"]').type("11999999999");
    cy.get('[name="password"]').type("Senha123");
    cy.get('[name="confirm"]').type("Senha123");
    cy.get('.float-right > .custom-control > .custom-control-label').click();
    cy.get('.float-right > .btn').click();
    cy.get('#account-register > .alert').should('have.text', ' Warning: E-Mail Address is already registered!')

  })
})