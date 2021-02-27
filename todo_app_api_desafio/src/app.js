const express = require('express');
const bodyParser = require('body-parser');

const controllUsuarios = require('./controllers/usuario_controllers');
const controllTarefas = require('./controllers/tarefas_controllers')
const bd = require('./infra/bd')

const port = 3001;
const app = express();

app.use(bodyParser.json());

controllUsuarios(app, bd);
controllTarefas(app, bd);

app.listen(port, ()=>{
    console.log(`ouvindo a porta ${port}`)
})