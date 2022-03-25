const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Alunos = require('../models/Aluno');

const connection = new Sequelize(dbConfig);

module.exports = connection;