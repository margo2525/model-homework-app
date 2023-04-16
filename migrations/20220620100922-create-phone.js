'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('phones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      model: {
        type: Sequelize.STRING,
      },
      brand: {
        type: Sequelize.STRING,
      },
      manufacture_year: {
        type: Sequelize.INTEGER,
        field: 'manufacture_year',
      },
      ram: {
        type: Sequelize.INTEGER,
      },
      processor: {
        type: Sequelize.STRING,
      },
      screen_diagonal: {
        type: Sequelize.FLOAT,
        field: 'screen_diagonal',
      },
      nfc: {
        type: Sequelize.BOOLEAN,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('phones');
  },
};
