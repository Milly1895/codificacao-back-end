## Middleware e Controle de Acesso no NestJS

Neste trabalho foi desenvolvido uma aplicação utilizando NestJS, com o objetivo de aprender sobre Middleware, rotas e controle de acesso.
Conteúdos trabalhados
Foi criado um Middleware responsável por:
Registrar no console o método HTTP e a rota acessada.
Verificar o acesso a rotas específicas.
Utilizar headers para validar permissões.
Retornar o status 403 quando o acesso não é permitido.

## Rotas

A aplicação possui três rotas principais:
/ — Rota pública, acessível normalmente.
/admin — Rota administrativa, que exige o header api-key-admin com o valor administrator.
/secret — Rota secreta, que exige o header api-key-secret com o valor supervisor.

## Funcionamento

O Middleware é aplicado a todas as rotas através do MiddlewareConsumer. Quando uma requisição é realizada, o Middleware verifica a rota e, caso seja uma rota protegida, confere a permissão enviada no header.
Se a permissão estiver correta, a requisição continua normalmente através do next(). Caso contrário, é retornado um erro 403 - Acesso Negado.

## Objetivo

A atividade teve como objetivo compreender como os Middlewares funcionam no NestJS e como podem ser utilizados para fazer registros de requisições e realizar um controle básico de acesso às rotas da aplicação.
