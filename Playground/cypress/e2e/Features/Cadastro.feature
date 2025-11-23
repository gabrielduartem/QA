Feature: Cadastro no site Lambdatest Playground

Background: Acesse a página Playground
    Given que o usuário acessa a página de cadastro

  @CT01
  Scenario: Usuário faz cadastro com credenciais válidas
    When ele preenche os campos com os requisitos válidos
    And clica no botão continue
    Then deve entrar na conta e aparecer os produtos


  @CT02
  Scenario: Usuário tenta se cadastrar sem preencher todos os campos obrigatórios
    When ele deixa um ou mais campos obrigatórios em branco
    And clica no botão continue
    Then deve ser exibida uma mensagem de alerta informando que todos os campos devem ser preenchidos

  @CT03
  Scenario: Usuário tenta se cadastrar com e-mail em formato inválido
    When ele preenche todos os campos com email errado
    And clica no botão continue
    Then deve ser exibida uma mensagem de erro informando que o e-mail é inválido