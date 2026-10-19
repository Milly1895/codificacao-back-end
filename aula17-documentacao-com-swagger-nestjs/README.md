## API de Catálogo e Estoque
Projeto desenvolvido durante a aula utilizando NestJS para criar uma API REST de cadastro de produtos, com documentação interativa utilizando Swagger.

## Tecnologias utilizadas
Node.js
TypeScript
NestJS
Swagger
O que foi desenvolvido
1. Configuração do módulo principal
Foi configurado o módulo principal da aplicação, responsável por organizar e registrar os controllers e providers necessários para o funcionamento do projeto.

## Inicialização da aplicação
Foi realizada a inicialização da aplicação com NestJS e configurada a documentação Swagger, incluindo título, descrição, versão e suporte à autenticação Bearer.
A documentação pode ser acessada pelo endereço http://localhost:3000/docs.
A aplicação está configurada para executar na porta 3000.

## Controller de produtos
Foi criado o controller de produtos, responsável por receber requisições HTTP para cadastrar novos produtos.
O endpoint implementado utiliza o método POST no caminho /produtos.

## DTO de criação de produtos
Foi criado o DTO CreateProdutoDto para definir os dados recebidos no cadastro de produtos.

``Os campos definidos foram:``
Nome: nome comercial do produto.
Preço: preço unitário de venda.
Categoria: categoria à qual o produto pertence.

Foi utilizado o decorator ApiProperty para documentar os campos, exemplos e descrições no Swagger.

## Funcionamento do cadastro
O endpoint recebe os dados enviados na requisição e retorna um objeto com identificador, informações do produto e data de criação.
O cadastro é demonstrativo e ainda não possui integração com banco de dados.

## Aprendizados da aula
Organização de módulos no NestJS.
Criação de controllers e rotas HTTP.
Utilização de DTOs.
Recebimento de dados em requisições.
Documentação de APIs com Swagger.
Inicialização do servidor na porta 3000.
Conclusão

Durante a aula, foram desenvolvidos os conceitos iniciais de uma API REST utilizando NestJS, com foco na organização do projeto, no cadastro de produtos e na documentação interativa com Swagger.