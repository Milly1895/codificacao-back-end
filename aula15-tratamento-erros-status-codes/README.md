## API de Produtos com NestJS
Projeto desenvolvido em sala de aula utilizando NestJS, TypeScript e Node.js, com o objetivo de praticar a criação de uma API e compreender a estrutura básica do framework.

## Conteúdos trabalhados
Durante a aula foram estudados os conceitos de Module, Controller e Service, além de injeção de dependências, criação de rotas HTTP, parâmetros de URL, tratamento de erros e utilização de logs.
O AppModule é o módulo principal da aplicação e registra os controllers e services utilizados no projeto. O AppController possui a rota /status, responsável por verificar se o servidor está ativo.
A aplicação também possui uma estrutura para gerenciamento de produtos. O ProdutosService mantém uma lista de produtos em memória e disponibiliza o método listarProdutos() para retornar esses dados.
O ProdutosController é responsável pelas requisições relacionadas aos produtos. Foi criada uma rota para buscar um produto pelo seu ID:
GET /produtos/:id
O ID recebido pela URL é convertido de texto para número. Caso seja informado um valor inválido, como /produtos/abc, a aplicação utiliza BadRequestException e retorna um erro HTTP 400.
Quando o ID é válido, o sistema procura o produto na lista. Caso o produto não exista, é utilizada a NotFoundException, retornando um erro HTTP 404.
Também foi utilizado o Logger do NestJS para registrar situações importantes, como tentativas de consulta com ID inválido ou produtos que não foram encontrados.

## Rotas
GET /status — verifica se o servidor está ativo.
GET /produtos/:id — busca um produto pelo seu ID.

## Produtos cadastrados
``` A aplicação possui cinco produtos:```
Teclado Mecânico — R$ 199,99
Mouse Gamer — R$ 99,99
Monitor 144Hz — R$ 899,99
Headset RGB — R$ 149,99
Cadeira Gamer — R$ 499,99

## Objetivo
O objetivo da aula foi compreender a organização de uma aplicação NestJS, separando as responsabilidades entre controllers e services, além de aprender a criar endpoints, validar parâmetros, tratar exceções e utilizar logs para acompanhar o funcionamento da aplicação.
