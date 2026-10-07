#  Testes de API REST com Insomnia (CRUD de Convidados)

Este repositório contém a documentação dos testes de requisições HTTP de uma API REST para gerenciamento de convidados, realizados exclusivamente na ferramenta **Insomnia**.

#  Tecnologias e Ferramentas
* **Insomnia** (Cliente HTTP)
* **Node.js / Express** (API executada em `http://localhost:3000`)
* **JSON** (Formato dos dados enviados e recebidos)

# Estrutura da Coleção no Insomnia (`Aula-08-09`)
As requisições estão organizadas nas seguintes pastas dentro da workspace:

# Pasta: `Teste GET e POST`
* `GET` **Método GET** — `http://localhost:3000/convidados`
* `POST` **Método POST** — `http://localhost:3000/convidados`

# Pasta: `Teste PATCH e DELETE`
* `PATCH` **Metodo PATCH** — `http://localhost:3000/convidados/:id`
* `DELETE` **Método DELETE** — `http://localhost:3000/convidados/:id`
# Detalhamento dos Endpoints e Testes

# Atualizar Convidado (`PATCH`)
Atualiza dados específicos/parciais de um convidado utilizando o seu ID na URL.
* **URL:** `http://localhost:3000/convidados/2`
* **Método:** `PATCH`
* **Header:** `Content-Type: application/json`
# **Corpo da Requisição (Body - JSON):**
```json
{
  "idade": 45
}


