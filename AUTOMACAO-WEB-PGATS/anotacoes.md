#Sobre PO ou Comandos Customizados
cadastro
preencher formulário

login
preencher formulário

fale conosco (contact us)
preencher formulário

checkout
selecionar entrega
preencher pagamento
finalizar a compra

___

cadastro.preencherFormulario()
checkout.selecionarEntrega()
checkout.preencherPagamento()

pró
-legibilidade e divisão de responsabilidades

contra
-carregar as acoes que eu preciso em cada teste (imports)

___

cy.preencherFormulario()
cy.selecionarEntrega()
cy.preencherPagamento()

cy.get()
cy.contains()

pró
-não precisa importar nada no arquivo de testes

contra
-legibilidade prejudica, com falta de contexto
-acoes do sistema misturadas com comandos da ferramenta


Estrategias
rodar tudo sempre
rodar por funcionaidade
tags - @cadastro,@login, @produtos

rodar por criticidade
tags-@critico, @media, @baixa

rodar por tamanho do teste
tags - @rapido, @intermediario, @demorado





