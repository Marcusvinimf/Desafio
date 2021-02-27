const Usuarios = require('../models/usuario_models');

module.exports = (app, bd)=> {
    
        app.get('/usuario', (req, resp) => resp.send(bd.usuarios));

        app.get('/usuario/:email', (req, res) =>
        {
                let resultado = [];
                for(let usr of bd.usuarios)
                        if(usr._email == req.params.email) resultado.push(usr);
                                resultado != 0 ? res.send(resultado) : res.send("Usuario não encontrado");
        });

        app.post('/usuarios', (req, res) => 
        {
                const user = new Usuarios(req.body.nome, req.body.email, req.body.senha);
                bd.usuarios.push(user);
                console.log(bd);
                res.send("OK!!!");
        });

        app.delete('/usuarios/:email', (req, res) => 
        {
                for (let i = 0; i < bd.usuarios.length; i++)
                {
                        if(bd.usuarios[i]._email==req.params.email)
                        {
                                bd.usuarios.splice(i, 1)
                                res.send(`Usuário com o email ${req.params.email} excluído.`);
                        };
                };
        });

        app.put('/usuarios/:email', (req, res) => 
        {
                for (let i = 0; i < bd.usuarios.length; i++)
                {
                        if(bd.usuarios[i]._email==req.params.email)
                        {
                                bd.usuarios[i]._nome = req.body.nome;
                                bd.usuarios[i]._email = req.body.email;
                                bd.usuarios[i]._senha = req.body.senha;
                                res.send(`Usuário com o email ${req.body.email} foi atualizado.`);
                        };
                };
        });
}