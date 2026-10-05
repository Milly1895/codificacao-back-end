<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Observability

In production applications, observability is essential for understanding how your system behaves, detecting issues early, and maintaining reliable performance.

[NestJS Observe](https://observe.nestjs.com) automatically instruments your NestJS application, giving you deep visibility into your system with minimal setup:

- **Distributed tracing:** Follow requests across services and understand how they flow through your system.
- **Waterfall analysis:** Visualize request execution and identify slow operations, bottlenecks, and unexpected delays.
- **Performance analysis:** Analyze application performance in real time and quickly pinpoint areas that need optimization.
- **Metrics:** Track key application and infrastructure metrics to understand system health and performance trends.
- **Logging:** Centralize and correlate logs with traces and other telemetry to make debugging easier.
- **Error tracking:** Detect errors quickly and investigate their root causes with the surrounding context.
- **SLA monitoring:** Track service-level objectives and identify when your application is approaching or exceeding defined thresholds.
- **Alarms and alerts:** Set up alerts for critical errors, performance degradation, SLA violations, and other anomalies so your team can react quickly.

This project is already instrumented. Create a free account at [observe.nestjs.com](https://observe.nestjs.com), add an application, and paste the generated app key and secret into the `ObserveModule.forRoot()` call in `src/app.module.ts`.

The free plan needs no payment details and covers 300,000 events a month. You can also browse the [live demo](https://www.observe-demo.nestjs.com/dashboard) first - the whole dashboard over a busy service's data, with nothing to install.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Auto-instrument your application with [NestJS Observe](https://observe.nestjs.com). Distributed tracing, metrics, and logging made easy. Error tracking and performance monitoring for your NestJS applications.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).



## Segurança com API Key — NestJS

 # Conteúdo trabalhado em sala de aula
 Nesta atividade foi desenvolvido um exemplo de controle de acesso utilizando uma chave de API em uma aplicação NestJS.
 O objetivo foi compreender como funciona uma autenticação simples utilizando uma API Key enviada pelo Header de uma requisição HTTP.

 ## Conceitos trabalhados
 Durante a atividade foram abordados os seguintes conceitos:
- Criação e utilização de Controllers no NestJS;
- Criação de rotas HTTP;
- Utilização do método GET;
- Leitura de Headers HTTP;
- Utilização de API Key para controle de acesso;
- Validação de uma chave de autenticação;
- Retorno de respostas em formato JSON;
- Utilização de códigos de status HTTP;
- Criação de Headers na resposta;
- Registro de Controllers no módulo principal da aplicação.

 ## Rota criada
 Foi criada uma área chamada **secreto**, acessada por meio de uma requisição GET.
 Essa rota possui um mecanismo simples de segurança que verifica se o usuário enviou uma API Key válida.

 ## API Key
 A autenticação da rota é realizada através do Header HTTP chamado **X-api-key**.
 Para fins didáticos, foi utilizada a chave **SENAI-2026**.
 Quando a chave enviada pelo usuário corresponde à chave esperada pela aplicação, o acesso ao conteúdo secreto é autorizado.

 ## Acesso autorizado
 Quando a API Key está correta, a aplicação permite o acesso e retorna uma resposta indicando que o conteúdo secreto foi acessado com sucesso.
 Também é enviado um Header informando que a autenticação foi verificada.
 A resposta possui o status HTTP **200 OK** e apresenta uma mensagem de acesso concedido, além da data e hora em que a requisição foi processada.

 ## Acesso não autorizado
 Quando a API Key está incorreta ou não é enviada, o acesso ao conteúdo secreto é bloqueado.
 Nesse caso, a aplicação retorna o status HTTP **403 Forbidden**, informando que a chave de API é inválida ou está ausente.

 ## Status HTTP utilizados
 Durante a atividade foram utilizados dois principais códigos de status:
- **200 OK:** indica que a requisição foi processada com sucesso e o acesso foi autorizado.
- **403 Forbidden:** indica que o acesso ao recurso foi negado.
 
 ## AppModule
 Também foi trabalhado o módulo principal da aplicação, responsável por organizar os componentes do projeto.
 O Controller responsável pela segurança foi registrado no módulo para que o NestJS pudesse reconhecer e disponibilizar a rota criada.

 ## Objetivo da atividade
 A atividade teve como objetivo compreender, na prática, como uma API pode controlar o acesso a determinado recurso utilizando uma chave de autenticação.
 Também foram trabalhados conceitos importantes de desenvolvimento de APIs, como:
- Requisições HTTP;
- Headers;
- API Key;
- Controllers;
- Rotas;
- Status HTTP;
- Respostas JSON;
- Organização de módulos no NestJS.

 ## Conclusão
 A atividade permitiu compreender uma forma básica de proteger uma rota de uma API utilizando uma chave de acesso.
 O exercício também ajudou a entender como o NestJS recebe uma requisição, verifica as informações enviadas pelo cliente e retorna uma resposta de acordo com o resultado da autenticação.
 A implementação realizada possui finalidade didática. Em aplicações reais, é recomendado utilizar mecanismos mais seguros para armazenamento e gerenciamento de chaves de autenticação.