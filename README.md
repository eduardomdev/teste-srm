# Teste Técnico SRM

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 9.1.13.

Este projeto utiliza a Versão v14.17.6 do [NodeJS].(https://nodejs.org/en)

## Como utilizar:

Rode `npm install` para instalar os arquivos do "node_modules".

Ao acessar o projeto acesse a pasta "backend" com `cd backend` no terminal e rode o 'back-end' do JSON-Server na --port 3000 com `npm start`. Para validar Navegue até http://localhost:3000.

Execute `ng serve` para acessar o servidor de desenvolvimento e navegue até `http://localhost:4200/`.

## Alterações no projeto:

Foram adicionadas as funcionalidades de:

*1. Selecionar a modalidade de juros entre `juros fixos sobre o valor solicitado` ou `juros por parcelas contradas`.*

*2. Atribuir a `taxa de juros` a ser utilizada.*

Devido a duvida de se a funcionalidade solicitada neste trecho do case `"Para o campo de juros considere como 5% do valor solicitado"` se referia a `juros fixos sobre o valor solicitado` ou `juros por parcelas contradas`, foram desenvolvidas ambas funcionalidades.

Conforme solicitado em `"Para o campo de juros considere como 5% do valor solicitado"`, a taxa de juros foi pré-definida como 5% mas para adicionar mais recursos aos calculos, entendi que seria interessante a possibilidade de poder selecionar diferentes taxas de juros, portanto esta funcionalidade também foi desenvolvida.






