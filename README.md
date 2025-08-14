# 🚀 Projeto Nex — Ambiente de Desenvolvimento Completo

O **Projeto Nex** é um ambiente de desenvolvimento pronto para uso, configurado com **Docker Compose** para rodar:  

- **PostgreSQL** (Banco de Dados)  
- **Backend** (Node.js + Express + TypeORM)  
- **Frontend** (React + Vite + Tailwind + Tanstack Router e Query)  

Tudo integrado para facilitar o desenvolvimento e testes.

---

## 📦 Pré-requisitos

- [Docker](https://www.docker.com/)  
- [Docker Compose](https://docs.docker.com/compose/)  
- [Node.js](https://nodejs.org/) *(opcional, para rodar localmente sem Docker)*

---

## 🛠 Como rodar o projeto

### Clonar o repositório
1. `git clone https://github.com/Lucas-R/noweb`

2. `cd noweb/frontend/`

3. `npm run dev`

> Pode acessar o projeto na url `http://localhost:5173/`.

### Docker
Depois de clonar o projeto pode rodar os comandos:

Mudar o arquivo .env.example para .env.development ou .env.production.

`npm run development`
> Vai criar dos os containers em modo de desenvolvimento e para testar precisa rodar o comando no terminal do container backend `npm run migration:run` para criar a tabela no banco, assim na pesquisa de endereço que pode realizar no frontend podera salvar no banco.

Para vizualizar os dados salvos pode utilizar as url's
localhost:3000/api/v1/address
* /POST
* /GET
* /PUT
* /DELETE

`npm run production`
> Vai criar apenas o container do  frontend buildado.


Eu não trabalhei a fundo como segurança, validação, tratamento de errors e etc.
