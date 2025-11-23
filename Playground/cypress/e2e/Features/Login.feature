Feature: Login no site Lambdatest Playground

Background: Acesse a página Playground
    Given que o usuário acessa a página de login

@CT01
Scenario: Usuário faz login com credenciais válidas
    When ele preenche os campos com requisitos válidos
    And clica no botão Login
    Then deve entrar na conta e aparecer My account

 @CT02
 Scenario: Usuário tenta fazer login com senha incorreta
    When ele preenche o campo de e-mail com um e-mail válido
    And preenche o campo de senha com uma senha incorreta
    And clica no botão Login
    Then deve exibir a mensagem Senha incorreta 

 @CT03
 Scenario: Usuário tenta fazer login com e-mail não cadastrado
    When ele preenche o campo de e-mail com um e-mail não cadastrado
    And preenche o campo de senha com uma senha qualquer
    And clica no botão Login
    Then deve exibir a mensagem Usuário não encontrado

 @CT04
 Scenario: Usuário tenta fazer login sem preencher os campos obrigatórios
    When ele deixa os campos de e-mail e senha em branco
    And clica no botão Login
    Then deve exibir mensagens de obrigatoriedade nos campos


 @CT05
 Scenario: Usuário tenta fazer login com formato de e-mail inválido
    When ele preenche o campo de e-mail com joao#teste.com
    And preenche o campo de senha com uma senha válida
    And clica no botão Login
    Then deve exibir a mensagem Formato de e-mail inválido
