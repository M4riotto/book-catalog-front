
# **Catálogo de Livros - Full Stack**

Este projeto consiste em uma aplicação de catálogo de livros construída com o frontend em **Angular** e o backend em **Nest.js**, que utiliza JWT para autenticação e MySQL para persistência dos dados.

## **Estrutura do Projeto**

- **Frontend**: Construído com Angular, fornece uma interface para visualizar, adicionar, editar e excluir livros. As rotas são protegidas por JWT.
- **Backend**: Construído com Nest.js, oferece uma API RESTful para realizar operações CRUD nos livros. A autenticação também é protegida por JWT.

---

## **Parte 1: Frontend com Angular**

### **Pré-requisitos**

1. Node.js v18.2 ou superior
2. Angular CLI 18.2

### **Instalação**

1. Clone o repositório do frontend:
   ```bash
   git clone https://github.com/M4riotto/book-catalog-front.git
   cd book-catalog-front
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

### **Configuração**

1. **Configuração do Ambiente**: Crie um arquivo `.env` na raiz do projeto para armazenar as variáveis de ambiente, como a URL da API:
   ```bash
   API_URL=http://localhost:3000
   ```

### **Scripts**

- **Desenvolvimento**: Para iniciar o servidor de desenvolvimento:
   ```bash
   ng serve -o
   ```

- **Compilar**: Para compilar o projeto:
   ```bash
   ng build
   ```

### **Funcionalidades**

- **Listagem de Livros**: A página inicial exibe todos os livros.
- **Detalhes do Livro**: Página de detalhes para exibir informações específicas de um livro.
- **Adição de Livros**: Formulário para adicionar novos livros.
- **Edição de Livros**: Funcionalidade para editar os detalhes dos livros.
- **Autenticação JWT**: As rotas que manipulam livros são protegidas por autenticação JWT.

### **Rotas**

- **/**: Exibe todos os livros no catálogo.
- **/auth**: Tela de autenticação.
- **/livros/:id**: Exibe os detalhes de um livro específico.
- **/criar-livro**: Página para adicionar um novo livro.
- **/editar/livros/:id**: Página para editar um livro existente.

### **Autenticação**

A autenticação utiliza **JWT**. Para autenticar, um usuário precisa fornecer um token válido que será armazenado no localStorage para acessar as rotas protegidas.
