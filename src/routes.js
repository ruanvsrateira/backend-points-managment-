const express = require('express');
const AlunoController = require('./controllers/AlunoController');
const PointController = require('./controllers/PointController');
const LoginController = require('./controllers/LoginController');

const routes = express.Router();

// Rotas do aluno
routes.post('/alunos/register', AlunoController.store);
routes.get('/alunos', AlunoController.getAllAlunos);
routes.get('/:userId/delete_aluno/', AlunoController.deleteAluno);

// Rota de login do Aluno
    routes.post('/logar', LoginController.validaLogin);
    routes.get('/alunos/:user_id/', AlunoController.getOneAluno);


// Pegando todos os pontos
    routes.get('/points', PointController.getAllPoints)

// Rota de Edição de pontos
    routes.post('/:user_id/add_point', PointController.store);
    routes.get('/user/:user_id/points', PointController.getPointsUser);
    routes.post('/user/:point_id/points_edited', PointController.editPoints);

    module.exports = routes;