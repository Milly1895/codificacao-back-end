# API de Livros com NestJS
Projeto desenvolvido em sala de aula utilizando NestJS e TypeScript, com o objetivo de praticar a criação de controllers, services, rotas com parâmetros e tratamento de exceções.

## Objetivo
O projeto apresenta uma API simples para consulta de livros. A aplicação permite verificar o status do servidor e buscar um livro específico através do seu ID.

## Estrutura
A aplicação possui os seguintes componentes principais:

- AppController: responsável pela rota de status da aplicação.
- AppService: fornece a mensagem de status do servidor.
- LivrosController: recebe as requisições relacionadas aos livros.
- LivrosService: armazena os livros e realiza a busca pelo ID.
- AppModule: registra os controllers e services da aplicação.

## Rota de Status
Foi criada a rota GET /status para verificar se o servidor está funcionando.
A resposta da rota é: Status: Servidor Ativo!

## API de Livros
A aplicação possui uma lista de livros armazenada em memória, contendo título, autor e ID.
A rota utilizada para consultar um livro é: GET /livros/:id
Exemplo: GET /livros/1
A aplicação retorna as informações do livro correspondente ao ID informado.

## Validação do ID
O controller utiliza o ParseIntPipe para converter e validar o parâmetro recebido na URL.
Caso o valor informado não seja um número inteiro válido, o NestJS realiza o tratamento da entrada antes de executar a busca no service.

## Tratamento de Erros
O LivrosService utiliza NotFoundException quando o livro solicitado não é encontrado.
Por exemplo, ao acessar:
GET /livros/10
a aplicação retorna um erro informando que o livro com o ID informado não foi localizado no acervo.

## Livros cadastrados
A aplicação possui os seguintes livros:
- O Senhor dos Anéis — J.R.R. Tolkien
- 1984 — George Orwell
- Dom Casmurro — Machado de Assis
- Memórias Póstumas de Brás Cubas — Machado de Assis
- Capitães da Areia — Jorge Amado

## Conceitos trabalhados
- NestJS
- TypeScript
- Controllers
- Services
- Modules
- Injeção de dependências
- Rotas HTTP
- Parâmetros de rota
- ParseIntPipe
- NotFoundException
- Organização e separação de responsabilidades

## Conclusão
O exercício teve como objetivo colocar em prática os principais fundamentos do NestJS, utilizando a separação entre Controller e Service, validação de parâmetros através do ParseIntPipe e tratamento de recursos inexistentes com NotFoundException. :::