# Upload de Mídia com NestJS
Projeto desenvolvido em sala de aula utilizando NestJS, TypeScript e Multer para implementar o upload de arquivos de mídia.

## Objetivo
O objetivo do projeto foi aprender a receber arquivos através de uma API, realizar validações e armazená-los no servidor.
A aplicação possui uma rota de upload que permite o envio de imagens nos formatos JPG, JPEG, PNG, GIF e WEBP.

## Upload de arquivos
A rota utilizada para realizar o upload é:
POST /midia/upload
O arquivo deve ser enviado utilizando o campo arquivo.
Para realizar o upload, foi utilizado o FileInterceptor, recurso do NestJS integrado ao Multer.

## Armazenamento
Os arquivos são armazenados na pasta uploads.
O projeto utiliza diskStorage para definir o local de armazenamento e gerar um nome único para cada arquivo.
Para evitar conflitos entre arquivos com o mesmo nome, é utilizado o UUID. A extensão original do arquivo é mantida.

## Validações
Foi definida uma limitação de tamanho de 2 MB por arquivo.
Os formatos permitidos são:
- JPG
- JPEG
- PNG
- GIF
- WEBP
Caso seja enviado um formato diferente, a aplicação retorna um erro informando que o tipo de arquivo não é permitido.
Também é verificado se realmente foi enviado um arquivo. Caso contrário, é utilizado o BadRequestException.

## Resposta
Quando o upload é realizado com sucesso, a API retorna informações sobre o arquivo enviado, incluindo nome, tamanho e URL de acesso.

## Conceitos trabalhados
- NestJS
- TypeScript
- Controllers
- Modules
- Upload de arquivos
- Multer
- FileInterceptor
- diskStorage
- UUID
- Validação de arquivos
- Limitação de tamanho
- Tratamento de exceções

## Conclusão
O exercício permitiu praticar a implementação de upload de arquivos em uma aplicação NestJS, utilizando ferramentas para armazenamento, geração de nomes únicos e validação dos arquivos enviados.