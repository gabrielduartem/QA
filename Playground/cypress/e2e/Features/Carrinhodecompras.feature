Feature: Carrinho de Compras do site Lambdatest Playground

@CT01
  Scenario: Adicionar produto disponível ao carrinho
    Given o usuário está na página inicial
    And o produto 'HTC Touch HD' aparece na lista de produtos
    When ele clica em 'Add to Cart' no produto 'HTC Touch HD'
    Then o carrinho deve mostrar “1 item(s)”

@CT02
  Scenario: Remover item do carrinho
    Given o usuário já adicionou “HTC Touch HD” ao carrinho
    When ele vai para a página do carrinho e remove esse item
    Then o carrinho deve ficar vazio

@CT03
  Scenario: Atualizar quantidade no carrinho
    Given o usuário tem “iMac” no carrinho
    When ele altera a quantidade para 2 e confirma
    Then o total do carrinho deve ser atualizado de acordo com a nova quantidade
