const express = require('express');
const AlunoController = require('./controllers/AlunoController');
const PointController = require('./controllers/PointController');
const LoginController = require('./controllers/LoginController');

const tokenMiddleware = require('./middlewares/jwtMiddleware');
const adminMiddleware = require('./middlewares/isAdminMiddleware');

const routes = express.Router();

// ROTAS NORMAIS
    routes.post('/alunos/register', AlunoController.store);
    routes.get('/alunos', tokenMiddleware.verifyToken, AlunoController.getAllAlunos);
    routes.post('/logar', LoginController.validaLogin);
    routes.get('/alunos/:user_id/', tokenMiddleware.verifyToken, AlunoController.getOneAluno);
    routes.get('/logout', tokenMiddleware.verifyToken, LoginController.logout);
    routes.get('/points', tokenMiddleware.verifyToken, PointController.getAllPoints);  
    routes.get('/user/:user_id/points', tokenMiddleware.verifyToken, PointController.getPointsUser);
    routes.get('/adminUsers', tokenMiddleware.verifyToken, AlunoController.getUsersAdmin);


// ROTAS ADMINISTRATIVAS 
    routes.get('/:user_id/delete_aluno/', tokenMiddleware.verifyToken, adminMiddleware.adminVerify, AlunoController.deleteAluno);
    routes.post('/:user_id/add_point', tokenMiddleware.verifyToken, adminMiddleware.adminVerify, PointController.store);
    routes.post('/user/:point_id/points_edited', tokenMiddleware.verifyToken, adminMiddleware.adminVerify, PointController.editPoints);
    routes.get('/:point_id/delete_point', tokenMiddleware.verifyToken, adminMiddleware.adminVerify, PointController.deletePoint);


// ROTAS INFORMATIVAS
    routes.get('/user/isAdmin', tokenMiddleware.verifyToken, AlunoController.userLoggedIsAdmin);
    routes.get('/user/isLogged', AlunoController.userIsLogged);



    module.exports = routes;