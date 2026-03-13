'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbc_Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING(100)
      },
      direccion: {
        type: Sequelize.STRING(150)
      },
      telefono: {
        type: Sequelize.STRING(15)
      },
      email: {
        type: Sequelize.STRING(120)
      },
      password: {
        type: Sequelize.STRING(255)
      },
      rol:{
      type: DataTypes.ENUM('admin', 'cliente'),
      allowNUll:false,
      defaultValue: 'cliente'
      },
      fecha_registro: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbc_Usuarios');
  }
};