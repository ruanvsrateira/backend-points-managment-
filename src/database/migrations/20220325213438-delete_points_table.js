'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    return queryInterface.dropTable("points")

  },
  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
