//Importando o pacote express e colocando em uma variável que chamei de express;
const express = require("express");
const routes = require("./routes");
//Colocando o a função express() na variável que chamei de server
const server = express()

//habilitar arquivos estáticos. O comando abaixo sugere a criação de todas as rotas que estão na pasta public de forma automática. 
server.use(express.static("public"));

//routes
server.use(routes);
/*
O objeto server usou uma propriedade listens para levantar o servidor.
primeiro argumento: 3000 (número da porta escolhida)
segundo argumento: função que será retornada. 
*/
server.listen(3000, () => console.log("Servidor rodando"));
