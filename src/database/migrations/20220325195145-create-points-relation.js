'use strict';

  module.exports = {
    async up (queryInterface, Sequelize) {
      queryInterface.createTable('points', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
        },
        
        points: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          allowNull: false
        },

        motivo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      });
    },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('points');
  }
};
