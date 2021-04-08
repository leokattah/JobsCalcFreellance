const sqlite3 = require ('sqlite3')
const { open } = require ('sqlite') // Esta sintaxe permite importar apenas a funcionalidade 'open' do pacote 'sqlite'. Não é necessário importar todo o pacote sqlite. 


// open precisa estar envolvido em chaves '{}' de uma estrutura de função e não somente chaves '{}' de estrutura de um objeto. Assim, é necessário criar uma função como foi criado abaixo. 
// Quando tenho apenas um item na arrow function, não é necessário envolver este item nas "{}" chaves. Assim, open() não tem '{}' chaves ao redor. 
module.exports = () => open({
  filename: './database.sqlite', // './database.sqlite é o nome da pasta que criei para armazenar os dados no banco de dados. Ela será criada no diretório raiz. 
  driver: sqlite3.Database
});

