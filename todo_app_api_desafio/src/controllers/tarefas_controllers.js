const Tarefas = require('../models/tarefas_models');

module.exports = (app, bd )=>{ 

        app.get('/tarefas', (req, res) => res.send(bd.tarefas));

        app.get('/tarefas/:status', (req, res) =>
        {
                let resultado = [];
                for(let trf of bd.tarefas)
                        if(trf._status == req.params.status) resultado.push(trf);
                                resultado != 0 ? res.send(resultado) : res.send("Tarefa não encontrado");
        });
        
        app.post('/tarefas', (req, res) => 
        {
                const taref = new Tarefas(req.body.titulo, req.body.descricao, req.body.status, req.body.dataDeCriacao);
                bd.tarefas.push(taref);
                console.log(bd);
                res.send("OK!!!");
        });

        app.delete('/tarefas/:status', (req, res) => 
        {
                for (let i = 0; i < bd.tarefas.length; i++)
                {
                        if(bd.tarefas[i]._status==req.params.status)
                        {
                                bd.tarefas.splice(i, 1)
                                res.send(`Tarefa com o status ${req.params.status} excluído.`);
                        };
                };
        });
        
        app.put('/tarefas/:status', (req, res) => 
        {
                for (let i = 0; i < bd.tarefas.length; i++)
                {
                        if(bd.tarefas[i]._status==req.params.status)
                        {
                                bd.tarefas[i]._titulo = req.body.titulo;
                                bd.tarefas[i]._descricao = req.body.descricao;
                                bd.tarefas[i]._status = req.body.status;
                                bd.tarefas[i]._dataDeCriacao = req.body.dataDeCriacao;
                                res.send(`Tarefa com o status ${req.body.status} foi atualizado.`);
                        };
                };
        });
};