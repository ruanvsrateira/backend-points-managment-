const { BelongsTo } = require('sequelize');
const Sequelize = require('sequelize');
const database = require('../database/index');

const Point = database.define('points', {
    points: {
        type: Sequelize.INTEGER,    
    },

    motivo: {
        type: Sequelize.STRING,
    },

    user_id: {
        type: Sequelize.INTEGER
    }
})

const User = require('../models/Aluno');

Point.belongsTo(User, { foreignKey: 'user_id', allowNull: false });

module.exports = Point;