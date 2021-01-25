const express = require('express');

const app = express();
const port = 3001;
const controllUsuarios = require('./controllers/usuario_controllers')

controllUsuarios(app);

app.get('/', (req, resp) =>{
    resp.send('<h1>FOI MERMO...</h1>')
})

app.listen(port, ()=>{
    console.log(`ouvindo a porta ${port}`)
})