'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Appointments', [
      {
        id: 1,
        date: "2023-06-06 11:59:38",
        price: 35.00,
        assessment: "Se realiza una ortodoncia completa",
        dentist: 5,
        patient: 2,
        service: 1,
        payment: 1,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 2,
        date: "2023-06-06 11:59:38",
        price: 50.60,
        assessment: "Se aplica un blanqueamiento dental de primer nivel",
        dentist: 5,
        patient: 3,
        service: 4,
        payment: 1,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 3,
        date: "2023-06-06 11:59:38",
        price: 120.50,
        assessment: "Se limpian los dientes, eliminando todo el sarro",
        dentist: 5,
        patient: 3,
        service: 8,
        payment: 3,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 4,
        date: "2023-06-06 11:59:38",
        price: 155.60,
        assessment: "Se realiza una ortodoncia infantil sin complicaciones",
        dentist: 2,
        patient: 4,
        service: 2,
        payment: 2,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Recipes', null, {});

  }
};