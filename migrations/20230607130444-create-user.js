'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dni: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      mobile: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      collegial: {
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.INTEGER,
        references: {
          model: "Roles",
          key: "id"
        }
      },
      speciality: {
        type: Sequelize.INTEGER,
        references: {
          model: "Specialities",
          key: "id"
        }
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
    await queryInterface.dropTable('Users');
  }
};