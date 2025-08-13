# 🚀 Projeto Nex — Ambiente de Desenvolvimento Completo

O **Projeto Nex** é um ambiente de desenvolvimento pronto para uso, configurado com **Docker Compose** para rodar:  

- **PostgreSQL** (Banco de Dados)  
- **Backend** (Node.js + Express + TypeORM)  
- **Frontend** (React + Vite)  

Tudo integrado para facilitar o desenvolvimento e testes.

---

## 📦 Pré-requisitos

- [Docker](https://www.docker.com/)  
- [Docker Compose](https://docs.docker.com/compose/)  
- [Node.js](https://nodejs.org/) *(opcional, para rodar localmente sem Docker)*

---

## 🛠 Como rodar o projeto

### Clonar o repositório
```bash
git clone https://github.com/Lucas-R/noweb
cd noweb


### 2 Rodar Frontend
```bash
cd /frontend
- Dentro do diretório /frontend pode rodar o comando
   - npm run dev
   Pode vizualizar o layout e navegar pelas paginas e testar o formulario que se encontra no menu no botão om lupa adicione o cep e ele preenche o formulario com as informações encontradas.
```

### Docker
```bash
/raiz
- Dentro da /raiz
   - npm run dev
   se tiver o docker instalado ele vai criar os container de /database(PostgreSQL) /backend(express) e /frontend

   pode navegar pelo frontend igualmente mas tera a opção de salvar sua busca.
```

É um teste que eu executei para frontend e achei injusto não salvar esses dados, fui um pouco além e criei o backend para tratar esses dados, criei de forma basica e simples só para uso do test.

Para vizualizar os dados salvos pode utilizar as url's
localhost:3000/api/v1/address
    - get
    - post
    - update
    - delete

Eu não trabalhei a fundo como segurança, validação, tratamento de errors e etc.