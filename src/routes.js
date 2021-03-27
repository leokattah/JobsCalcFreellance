const express = require ("express");

const routes = express.Router();

const basePath = __dirname + "/views"
/*
request / response
a propriedade get foi usada para criar uma rota / . Os argumentos usados pelo servidor serão request e response, por isso, estão dentro dos (). A função return foi usada com argumento response e o método sendFile para chamar o arquivo escolhido, neste caso, index.html e a página ser visualizada no navegador. 
*/
routes.get('/', (request, response) => response.sendFile(basePath + '/index.html'))
routes.get('/job', (request, response) => response.sendFile(basePath + '/job.html'))
routes.get('/job/edit', (request, response) => response.sendFile(basePath + '/job-edit.html'))
routes.get('/profile', (request, response) => response.sendFile(basePath + '/profile.html'))

module.exports = routes;