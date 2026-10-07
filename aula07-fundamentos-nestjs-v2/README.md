## Aula 07 — Fundamentos do NestJS
Projeto desenvolvido em sala de aula para praticar os fundamentos do NestJS, trabalhando com módulos, controllers, services, rotas HTTP, injeção de dependências e observabilidade.

## Objetivo
O objetivo da aula foi compreender a estrutura básica de uma aplicação NestJS e como seus principais componentes se relacionam. Também foi trabalhada a configuração do recurso de observabilidade utilizando o módulo @nestjs/observe.

## Estrutura do projeto
A aplicação possui os arquivos principais: app.controller.ts, app.module.ts, app.service.ts e main.ts.
Controller: O AppController é responsável por receber as requisições HTTP. Foi criada a rota GET /api, que utiliza o AppService para retornar uma mensagem.
A resposta da rota é: Servidor Nest.JS - Aula 07 Ativo!
Service: O AppService contém a lógica utilizada pelo controller. Ele possui o método getHello(), responsável por retornar a mensagem de status da aplicação.
Module: O AppModule é o módulo principal da aplicação. Nele são registrados o AppController e o AppService.
Também foi configurado o ObserveModule, responsável pelos recursos de observabilidade da aplicação.

## Observabilidade
Durante a aula foi apresentada a integração com o @nestjs/observe, possibilitando trabalhar com recursos como rastreamento distribuído, logs correlacionados, métricas de requisições e telemetria de erros.
O projeto utiliza o serviceId:

As informações de appKey e appSecret devem ser configuradas de acordo com o ambiente utilizado.
Inicialização: O arquivo main.ts é responsável por iniciar a aplicação utilizando o NestFactory. A aplicação utiliza a porta definida pela variável de ambiente PORT. Caso ela não esteja configurada, a porta padrão utilizada é a 3000.

## Conceitos trabalhados
- Estrutura de uma aplicação NestJS
- Module
- Controller
- Service
- Injeção de dependências
- Decorators
- Rotas HTTP
- NestFactory
- Variáveis de ambiente
- Observabilidade
- Instrumentação da aplicação

## Conclusão
A aula apresentou os fundamentos necessários para estruturar uma aplicação utilizando NestJS. Foi possível compreender a função dos módulos, controllers e services, criar uma rota HTTP e configurar recursos de observabilidade para acompanhar o funcionamento da aplicação.
