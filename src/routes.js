const express = require('express');
const AlunoController = require('./controllers/AlunoController');
const PointController = require('./controllers/PointController');

const routes = express.Router();

routes.post('/alunos', AlunoController.store);
routes.get('/', AlunoController.getAllAlunos);

routes.get('/delete_aluno/:userId', AlunoController.deleteAluno);

routes.post('/:user_id/add_point', PointController.store);

module.exports = routes;