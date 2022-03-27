'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn("alunos", "total_points", {
      type: Sequelize.INTEGER,
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn("alunos", "total_points")
  }
};
