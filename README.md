# PD Hours Control

Este é um sistema de controle de horas para a PD Soluções, desenvolvido com **NestJS** no backend e **MySQL** como banco de dados.

---

## 🚀 Tecnologias Utilizadas

- **NestJS**: Framework para construção de APIs robustas e escaláveis.
- **MySQL**: Banco de dados relacional.
- **TypeORM**: ORM utilizado para gerenciar o banco de dados.
- **Docker**: Ambiente de desenvolvimento e banco de dados.


---

## 📦 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/jandersonvb/pdhours-api.git

   cd pdhours-api

2. **Instale as dependências**
   ```bash
   npm install

3. **Crie um arquivo `.env` na raiz do projeto**
   ```env
    DB_HOST=localhost
    DB_PORT=3306
    DB_USERNAME=root
    DB_PASSWORD=root
    DB_NAME=nest

4. **Suba o banco de dados com Docker Certifique-se de que o Docker esteja instalado e execute o seguinte comando:**
   ```bash
    docker-compose up -d

5. **Inicie o servidor**
   ```bash
   npm run start:dev

6. **🔄 Endpoints da API**
  
    - **GET** `/squad`: Retorna todas as squads cadastradas.
    - **POST** `/squad`: Cria uma nova squad.
    - **GET** `/squad/:id`: Retorna uma squad específica.
    - **PUT** `/squad/:id`: Atualiza uma squad específica.
    - **DELETE** `/squad/:id`: Deleta uma squad específica.

    - **GET** `/employee`: Retorna todos os funcionários cadastrados.
    - **POST** `/employee`: Cria um novo funcionário.
    - **GET** `/employee/:id`: Retorna um funcionário específico.
    - **PUT** `/employee/:id`: Atualiza um funcionário específico.
    - **DELETE** `/employee/:id`: Deleta um funcionário específico.

    - **GET** `/squad/:id/hours-by-member`: Retorna as horas de cada membro de uma squad.
    - **GET** `/squad/:id/total-hours`: Retorna o total de horas de uma squad.
    - **GET** `/squad/:id/average-hours`: Retorna a média de horas de uma squad.


7. **🛠 Ferramentas de Desenvolvimento**
    Testar a API no Insomnia

8. **📚 Referências**
    - [NestJS](https://nestjs.com/)
    - [TypeORM](https://typeorm.io/)
    - [Docker](https://www.docker.com/)



