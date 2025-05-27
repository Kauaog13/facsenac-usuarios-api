# facsenac-usuarios-api

API REST para gerenciamento de usuários utilizando Node.js, Express, Knex e MySQL.  
Este projeto foi desenvolvido como parte das atividades do curso de **Análise e Desenvolvimento de Sistemas**.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime de JavaScript.
- **Express** - Framework para criação de servidores HTTP.
- **Knex.js** - Query builder para interagir com o banco de dados.
- **MySQL** - Sistema de gerenciamento de banco de dados relacional.
- **dotenv** - Gerenciamento de variáveis de ambiente.

---

## 📦 Estrutura de Pastas

├── src
│ ├── controllers
│ │ └── usuariosController.js
│ ├── db
│ │ └── knex.js
│ ├── routes
│ │ └── usuarios.js
│ ├── app.js
│ └── index.js
├── .env
├── package.json
├── knexfile.js
└── README.md


---

## 🛠️ Configuração do Ambiente

1. **Clone o repositório:**

```bash
git clone https://github.com/seuusuario/facsenac-usuarios-api.git
cd facsenac-usuarios-api

2. Instale as dependências:

npm install

3. Configure o arquivo .env:

DB_HOST=127.0.0.1
DB_PORT=3307
DB_USER=root
DB_PASSWORD=
DB_NAME=facsenac
PORT=3000

⚠️ Obs.: Banco de dados MySQL rodando no XAMPP, na porta 3307, sem senha.

4. Configure o Knex:

const knex = require('knex');
require('dotenv').config();

const db = knex({
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
});

module.exports = db;

🗄️ Estrutura da Tabela usuarios

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  data_nascimento DATE NOT NULL,
  telefone VARCHAR(15) NOT NULL,
  email VARCHAR(120) NOT NULL
);

▶️ Como Rodar o Projeto

1. Inicie o servidor:

npm start

2. O servidor irá rodar na porta configurada (padrão 3000).
A mensagem esperada: Servidor rodando na porta 3000.

🔗 Rotas da API

✅ GET /usuarios
Lista todos os usuários cadastrados.

curl http://localhost:3000/usuarios

✅ GET /usuarios/:id
Busca um usuário pelo id.

bash
Copiar
Editar
curl http://localhost:3000/usuarios/1

✅ POST /usuarios
Cria um novo usuário.

bash
Copiar
Editar
curl -X POST http://localhost:3000/usuarios \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Ana Pereira",
    "data_nascimento": "1988-11-15",
    "telefone": "11987776655",
    "email": "ana.pereira@example.com"
  }'

✅ PUT /usuarios/:id
Atualiza os dados de um usuário.

bash
Copiar
Editar
curl -X PUT http://localhost:3000/usuarios/1 \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Ana P. Silva",
    "data_nascimento": "1988-11-15",
    "telefone": "11987776655",
    "email": "ana.silva@example.com"
  }'

✅ DELETE /usuarios/:id
Remove um usuário pelo id.

bash
Copiar
Editar
curl -X DELETE http://localhost:3000/usuarios/1

✅ Exemplo de resposta JSON
json
Copiar
Editar
{
  "message": "Usuário criado com sucesso"
}
ou

json
Copiar
Editar
{
  "message": "Usuário não encontrado"
}

❗ Possíveis Erros
Erro de conexão com o banco: verifique se o MySQL está rodando e a porta correta (3307).

Erro de CORS: adicionar middleware se necessário.

Servidor não inicia: confira as configurações de .env e o knex.js.

📝 Autor
@Kauaog13 — Estudante de Análise e Desenvolvimento de Sistemas.

💡 Observações
Esse projeto serve como base para criar APIs REST utilizando Node.js com integração ao MySQL.

Ótimo para portfólio e aprendizado de boas práticas com Express e Knex.
