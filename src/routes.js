const express = require('express');
const AlunoController = require('./controllers/AlunoController');
const PointController = require('./controllers/PointController');
const LoginController = require('./controllers/LoginController');

const routes = express.Router();

// Rotas do aluno
routes.post('/alunos/register', AlunoController.store);
routes.get('/alunos', AlunoController.getAllAlunos);
routes.get('/:userId/delete_aluno/', AlunoController.deleteAluno);

//Adicionar ponto ao aluno
routes.post('/:user_id/add_point', PointController.store);

// Rota de login do Aluno
    routes.post('/logar', LoginController.validaLogin);
    routes.get('/alunos/:user_id/', AlunoController.getOneAluno);

module.exports = routes;