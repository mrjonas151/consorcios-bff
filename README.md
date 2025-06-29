# Sistema de Gerenciamento de Consórcios - BFF

Este projeto é um Backend-for-Frontend (BFF) para um sistema de gerenciamento de consórcios, funcionando como uma camada de abstração entre o frontend e o backend principal da aplicação.

## 🛠️ Tecnologias Utilizadas

- **NestJS**: Framework Node.js para construção de aplicações server-side eficientes e escaláveis
- **GraphQL**: API Query Language para recuperar dados de forma mais eficiente
- **Apollo Server**: Servidor GraphQL
- **JWT**: Autenticação baseada em tokens
- **HttpService**: Cliente HTTP para comunicação com o backend
- **Class-validator**: Validação de dados

## 🏗️ Estrutura do Sistema:

O sistema gerencia as seguintes entidades:

- **Administradoras de Consórcio**: Empresas que administram grupos de consórcio
- **Grupos**: Conjuntos de cotas de consórcio sob uma administradora
- **Cotas**: Participações individuais em um grupo de consórcio
- **Clientes**: Pessoas que adquirem cotas de consórcio

## ⚙️ Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM
- Backend principal em execução (por padrão em http://localhost:5027)

## 🚀 Configuração

### 1. Clone o repositório:

```bash
git clone https://github.com./mrjonas151/consorcios-bff.git
cd jonas-bff
```

### 2. Instale as dependências:

```bash
npm install
```

### 3. Configure o arquivo .env:

```
API_URL=http://localhost:5027
JWT_SECRET=segredo_jwt
```

## ▶️ Executando o Projeto

### 1. Inicie o servidor em modo de desenvolvimento:

```bash
npm run start
```

### 2. O servidor GraphQL estará disponível em:

```
http://localhost:4000/graphql
```

## 🧪 Testando as APIs

Você pode testar as APIs GraphQL usando ferramentas como:

- **Apollo Studio Explorer**: Acesse http://localhost:4000/graphql no navegador
- **Insomnia**: Importe as collections para testar as operações CRUD
- **Postman**: Configure requisições GraphQL para o endpoint

## 🔐 Autenticação

Para operações autenticadas, inclua o token JWT no cabeçalho:

```
Authorization: Bearer TOKEN_DE_ACESSO
```

---
