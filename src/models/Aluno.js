const Sequelize = require('sequelize');
const database = require('../database/index');

const Aluno = database.define('alunos', {
    nome: {
        type: Sequelize.STRING,    
    },

    email: {
        type: Sequelize.STRING,
    },

    password: {
        type: Sequelize.STRING,
    },

    admin: {
        type: Sequelize.BOOLEAN,
    },

    total_points: {
        type: Sequelize.INTEGER,
    },
});

module.exports = Aluno;