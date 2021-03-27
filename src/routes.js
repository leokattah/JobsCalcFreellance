const express = require ("express");

const routes = express.Router();

/*
req (request / res(response)
a propriedade get foi usada para criar uma rota / . Os argumentos usados pelo servidor serão req e res, por isso, estão dentro dos (). A função return foi usada com argumento res e o método sendFile para chamar o arquivo escolhido, neste caso, index.html e a página ser visualizada no navegador. 
*/

/*
Após a importação do ejs, vários nomes foram trocados neste arquivo. Por exemplo: sendFile foi substituído por render. 
*/

const views = __dirname + "/views/"

const profile = {
  name: "Leonardo",
  avatar: "https://avatars.githubusercontent.com/u/64365302?v=4",
  "monthly-budget": 10000,
  "days-per-week": 5,
  "hours-per-day": 5,
  "vacation-per-year": 4
}

// no caminho routes.get('/profile', (req, res) => res.render(views +  'profile', {profile})) foi adicionado {profile} para que seu conteúdo seja enviado pelo EJS. A variável profile foi criada para receber o objeto com os dados que devem ser enviados. 

routes.get('/', (req, res) => res.render( views + 'index'))
routes.get('/job', (req, res) => res.render(views +  'job'))
routes.get('/job/edit', (req, res) => res.render( views + 'job-edit'))
routes.get('/profile', (req, res) => res.render(views +  'profile', {profile}))

module.exports = routes;