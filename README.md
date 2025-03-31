## Descrição do Projeto

Este projeto foi desenvolvido como parte de um desafio técnico, criando uma interface em React que consome a API pública do Rick and Morty para buscar e exibir personagens individualmente.

## Funcionalidades Implementadas

Busca de Personagem: Interface para buscar um personagem específico pelo ID(apenas no botão de novo personagem)

Design Responsivo: Layout adaptável usando Sass para estilização

Testes Automatizados: Suíte de testes com Jest para garantir a qualidade do código

## Tecnologias Utilizadas

### Frontend:

React com JavaScript

Sass para estilização

Axios para requisições HTTP

### Testes:

Jest

React Testing Library

## Como Executar o Projeto

Clone o repositório:

git clone https://github.com/igustavo11/Desafio-agroger.git

#### Instale as dependências:

npm install

#### Inicie a aplicação:

npm start

#### Para executar os testes:

npm test

### Funcionamento da Aplicação:

A interface apresenta um campo de busca onde seleciona o novo personagem 

Ao submeter a busca, a aplicação consome o endpoint /character/{id} da API Rick and Morty

### Os dados do personagem são exibidos em um card com:

Imagem

Nome

Espécie
