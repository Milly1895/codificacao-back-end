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