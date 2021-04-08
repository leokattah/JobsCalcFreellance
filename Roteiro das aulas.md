# Qual a proposta deste projeto?

* [ ] Organização e estudo
* [ ] Plataforma e Comunidade
* [ ] Mentalidade Dev
* [ ] Praticar as tecnologias do Discover

# O que você vai ganhar com isso?

* [ ] Clareza prática
* [ ] Entendimento da plataforma e comunidade
* [ ] Projeto aplicando os conceitos do Discover
* [ ] Bases necessárias para continuar sua jornada

# Dicas para ir até o fim

* Entre na comunidade do Discord
* Como a comunidade funciona
* Como tirar dúvidas técnicas
* Conectar-se com outros devs [fazerem duplas]

# Aula 1

# Bora Codar

* [x] Ambiente
		* [x] NodeJS 
    * [x] Navegador
    * [x] VS Code
        * [x] Tema
				* [x] Fontes
        * [x] Plugins
* [x] Apresentar HTML e CSS
    * [x] index.html
    * [x] profile.html
    * [x] job.html
    * [x] styles
    * [x] scripts
* [x] O que é Node
    * [x] página oficial
    * [x] node -v
* [x] Iniciar o projeto
    * [x] npm
* [x] package.json
* [x] Instalar Express
    * [x] Dependencies
    * [x] node_modules
* [x] Criar servidor
    * [x] require()
    * [x] Iniciar o servidor (listen)
    * [x] Primeira rota
        * [x] `.get("/", () ⇒ console.log('cheguei na rota'))`
        * [x] request e response
* [x] Instalar o nodemon
    * [x] dev dependencies
    * [x] configurar
    * [x] npm run dev
* [x] mostrando index.html
* [x] views directory
* [x] public directory
* [x] create routes.js
    * [x] module.exports
* [x] fix
    * [x] file paths
    * [x] href
* [x] template engine
* [x] Benefício 1: reutilizar componentes (header)
    * [x] instalar ejs
    * [x] transformar .html em .ejs
    * [x] `<%- include('parts/page-header', { title: 'Meu Perfil'}) %>`
    * [x] install ejs plugin
* [x] Benefício 2: Programar no HTML
    * [x] variáveis
    * [x] criar o objeto do perfil de usuário
    * [x] passar o objeto do perfil de usuário para o profile.ejs

# Aula 2

# Bora Codar

- [x]  Revisão da última aula
- [x]  O que veremos até o final dessa aula?

## Salvar Job
	* [x] Form job
    - [x] method post
    - [x] action="/job"
	* [x] rota /job POST
    - [x] req.body
    - [x] urlencoded
	* [x] Criar array de jobs
    - [x] enviar para o index.ejs
    - [x] .forEach
    - [x] ajustes dos dados no index
	* [x] Configurar jobs na criação de um novo Job
    - [x] job id: pegar o id do ultimo item do array
    - [x] created_at: Date.now()
      - [x] para o cálculo de dias restantes
    - [x] total-hours
    - [x] daily-hours
    - [x] name
	* [x] Atualizar os jobs no index, antes de apresentar

## Remaining calculation
  * [x] Devemos calcular sempre que apresentar o projeto, 
				pois poderemos mudar os dados do projeto a qualquer momento
  * [x] remainingDays = total hours do job / daily hours do job
  * [x] adicionar os dias à data de criação, para criar uma data futura
  * [x] subtrair da data futura, o número de dias restantes baseado na data de hoje
  * [x] pegar a diferença de milissegundos para dias
  * [x] update status (done | progress)
  * [x] budget: profile value hour * total job hours
    - [x] deverá ser atualizado sempre que apresentar o projeto, 
						pois poderá variar dependendo dos dados do projeto ou dos dados do perfil
	* [x] atualizar o index.ejs
    - [x] Prazo encerrado ao invés de 0 dias para a entrega
	* [x] adicionar uma entrada no jobs[] para o prazo encerrado
	
## Refatorar Jobs
    - [x] Criar um Object Literal Jobs
    - [x] Adicionar data em Jobs
    - [x] Adicionar index() e create()

## Object Profile
	* [x] data
  * [x] update()
    - [x] Calculo de custo de hora
	    * [x] weeksPerYear
	    * [x] weeksPerMonth = weeks per year - vacation
	    * [x] total hours per week
	    * [x] monthly total hours
	    * [x] value hour = monthly budget / monthly total hours
    - [x] redirect to /profile

## Editar job
  * [x] criar função show
    - [x] rota job/:id GET
    - [x] req.params
    - [x] .find
    - [x] Job not found
    - [x] service: calculate job budget
    - [x] refactor index to use service
    - [x] update job-edit.ejs
  * [x] criar função de update
    - [x] rota /job/:id POST
    - [x] .find
    - [x] job not found
    - [x] updatedJob
    - [x] Job.data= Job.data.map()
    - [x] redirect

## Delete job
  * [x] route /job/delete/:id POST
  * [x] Job.controller.delete()
  * [x] req.params.id
  * [x] Job.data.filter()
  * [x] redirect to /
	* [x] Delete all Jobs and find error
    - [x] lastId of Job.controller.create()
    - [x] use optional chaining operator ?.
    - [x] use Logical OR operator

# Aula 3

# Bora Codar
- [X]  Revisão da última aula
- [X]  O que veremos até o final dessa aula?

## Refatorar
 * [X] Sinalizar local da pasta views no server
 * [X] Importar Path no server
 * [X] Refatorar routes para nova forma de chamar views

## Refatorar Profile
	* [X] Separar controller
  * [X] Criar model
	* [X] Separar data
	* [X] Criar get no model
 	* [X] Importar model Profile no ProfileController
	* [X] Refaotrar Profile.data para Profile.get()
	* [X] Refatorar update do profile no model

## Refatorar Job
	* [X] Mover controller para JobController
	* [X] Criar pasta utils
	* [X] Mover services de job para utils
	* [X] Importar utils dentro de jobController
	* [X] Refatorar chamada de job services para JobUtils
  * [X] Mover Job data para model Job
	* [X] Importar model Job dentro de Jobcontroller
	* [X] Refatorar chamadas de job.data para Job
	* [X] Criar update no model recebendo newData
	* [X] Criar delete no model

## Refatorar Dashboard
	* [X] Passar index do JobController para DashboardController
	* [X] Refatorar a chamada da rota "/" no routes
	* [X] Importar model Job
  * [X] Importar model Profile
	* [X] Importar JobUtils
	* [X] Refatorar chamadas de profile, job e utils
	* [X] Passar profile para index.ejs
  * [X] Refatorar os dados de profile no index.ejs
  * [X] Criar StatusCount
	* [X] Passar StatusCount para index.ejs
	* [X] Refatorar os dados de contagem de status no index.ejs
  * [X] Calcular freeHours
	* [X] Passar freehours para index.ejs
	* [X] Refatorar dados de freehours no index.ejs
	* [X] Ajuste o alinhamento de campos de perfil

## Banco de dados
	* [X] Como funciona banco de dados e tabelas

# Aula 4

# Bora Codar
- [X]  Revisão da última aula
- [X]  O que veremos até o final dessa aula?

## Refatorar
* [X] Save JobController

## Banco de dados
	* [X] Instalar SQLite
	* [X] Criar config
	* [X] Criar init
	* [X]  Async Await
	* [X] Criar tabela profile
	* [X] Criar tabela jobs
	* [X] Inserir profile
	* [X] Inserir Jobs
	* [X]  Instalar beekeeper
	* [X] Ver resultado no beekeeper

## Profile
	* [x]  Importar config no module 

## Profile get()
	* [x] iniciar banco de dados
	* [x] SELECT de profile
	* [x] Fechar banco de dados 
	* [x] Normalizar os dados 
	* [x] Retornar os dados normalizados
	* [X]  Transformar index do controller em Async
	* [X] Transformando index do DashboardController em Async

## Profile update()
	* [X] iniciar banco de dados
	* [X] UPDATE de profile
	* [X] Fechar banco de dados 
	* [X] Transformando update no controler em Async

## Jobs 
	* [X] Importando config no module

## Jobs show()
	* [X] iniciar banco de dados
	* [X] SELECT de job
	* [X] Fechar banco de dados 
	* [X] Normalizar os dados 
	* [X] Retornar os dados normalizados
	* [X] Transformando show do controller em Async

## Jobs create()
	* [X] iniciar banco de dados
	* [X] INSERT de newJob
	* [X] Fechar banco de dados

## Jobs update()
	* [X] iniciar banco de dados
	* [X] UPDATE de job
	* [X] Fechar banco de dados 

## Jobs delete()
	* [X] iniciar banco de dados
	* [X] DELETE job
	* [X] Fechar banco de dados  