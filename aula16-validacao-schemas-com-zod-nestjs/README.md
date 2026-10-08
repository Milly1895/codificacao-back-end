## API de Colaboradores
Projeto desenvolvido com NestJS para criação de uma API de cadastro de colaboradores, utilizando Zod para validação das informações recebidas.

## Sobre
A aplicação permite cadastrar colaboradores através de uma API REST. Os dados enviados são validados antes de serem processados, garantindo que as informações estejam dentro dos critérios definidos.

## Tecnologias utilizadas
- NestJS
- TypeScript
- Node.js
- Zod

## Funcionalidades
- Endpoint para verificar o status do servidor.
- Cadastro de colaboradores.
- Validação de nome, e-mail, idade e departamento.
- Tratamento de erros de validação.

## Regras de validação
```O colaborador deve possuir:```
- Nome com no mínimo 3 caracteres.
- E-mail válido.
- Idade entre 18 e 65 anos.
- Departamento definido como TI, RH ou Financeiro.

## Endpoints
GET /status
Verifica se a aplicação está funcionando.

POST /colaboradores
Realiza o cadastro de um colaborador após validar os dados enviados.

## Objetivo
Este projeto foi desenvolvido com o objetivo de praticar a construção de APIs utilizando NestJS e aplicar validações de dados com Zod.