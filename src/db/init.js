// Este arquivo init.js roda só uma vez e tem a finalidade de criar as tabelas no bando de dados. 
// Destaca-se que bando de dados não aceita ' ' (espaço) e não aceita ' - ' (traço). Assim, os nomes dos campos serão alterados  e ficarão diferentes dos arquivos Job.js e Profile.js. Outra regra do bando de dados é que ele aceita ' _ ' (underline)

const Database = require ('./config');

const initDb = { 
  async init() {

// Este comando já inicia a conexão com o bando de dados.
// Await foi usado em Databasee() e inserido na variável db para que que o javascript aguarde sua execução para depois seguir para outros comandos ou funções abaixo. Do contrário, o código apresenta um erro. 
// As funções abaixo, como db.exec, db.ru, db.close não foram colocadas em uma variável porque não é necessário aguardar seu resultado para o código continuar. 
const db = await Database() 

// Entre o início da conexão e o encerramento é o local que devo colocar o código. Os códigos abaixo são colocados dentro das crases para que os espaços sejam aceitos. 
await db.exec(`CREATE TABLE profile (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT, 
  avatar TEXT, 
  monthly_budget INT, 
  days_per_week INT,
  hours_per_day INT,
  vacation_per_year INT,
  value_hour INT
)`);

await db.exec(`CREATE TABLE jobs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT, 
  daily_hours INT,
  total_hours INT,
  created_at DATETIME
)`)

await db.run(`INSERT INTO profile (
  name, 
  avatar, 
  monthly_budget, 
  days_per_week, 
  hours_per_day, 
  vacation_per_year,
  value_hour
) VALUES (
   "Leonardo",
   "https://github.com/leokattah.png",
   10000,
   5,
   5,
   4,
   70
);`)

await db.run(`INSERT INTO jobs (
  name, 
  daily_hours,
  total_hours,
  created_at
) VALUES (
  "Pizzaria Guloso",
  2,
  1,
  1617514376018
);`)

await db.run(`INSERT INTO jobs (
  name, 
  daily_hours,
  total_hours,
  created_at
) VALUES (
  "OneTwo Projects",
  3,
  47,
  1617514376018
);`)

//Este comando encerra a conexão com o bando de dados
await db.close()
  }
}

initDb.init()