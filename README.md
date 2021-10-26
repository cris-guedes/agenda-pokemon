# Avaliable running project
- [Link For Project](https://damp-ocean-86592.herokuapp.com/)

## description
O projeto foi desenvolvido como um trabalho da disciplina de banco de dados da universidade UTFPR
o desafio era desenvolver uma aplicação que implementasse um [CRUD](https://developer.mozilla.org/pt-BR/docs/Glossary/CRUD) de pokemons
sem usar um banco de dados para armazenar as informações. Os dados poderiam ser armazenadas em documentos simples como exemplo .txt .csv o arquivo escolhido para 
dar suporte ao armazenamento e manipulação de dados foi escolhido o formato .json 

### Tech stack
- [Node](https://github.com/nodejs/node)
- [Express](https://github.com/expressjs/express)
- [Mustache](https://www.npmjs.com/package/mustache)
- [Typescript](https://www.typescriptlang.org/)

## Dependencies
- Node js => v10
- dotenv
- express
- multer
- mustache-express
- ts-node
- typescript
- uuid

## Up and Running
- Install dependencies `yarn (or npm i)`
- Run `yarn dev (or npm dev)` to run development server  at `http://localhost:3000`
    yarn dev
    npm dev

## Available scripts
- `yarn start (or npm start)`: Run server in production mode
- `yarn dev (or npm dev)`: Run server in development mode

### Folders structure (simplified)

```
📦src               ---Source folder---
 ┣ 📂controller     #Controllers used in App
 ┣ 📂entities       #Entities used in App
 ┣ 📂models         #Models used in App
 ┣ 📂provider       #Providers used in App in case a json fille is the source of data
 ┗ 📂routes         #Routers used in App

📦views             ---Views folder---
 ┣ 📂pages          #Pages used in App
 ┗ 📂partials       #Partials elements for template 

 📦public           ---Public folder---
 ┣ 📂css            #Styles files used in the app
 ┗ 📂images         #Images used in the app
```
