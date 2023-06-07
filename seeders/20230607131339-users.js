'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        dni: "41730025N",
        name: "Lucia",
        surname: "Maza Gilabert",
        password: "1234",
        age: 37,
        mobile: 736554817,
        email: "lucia@gmail.com",
        location: "C/Arturo Benlliure",
        collegial: 464650371,
        role: 1,
        speciality: 1,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 2,
        dni: "20123665C",
        name: "Maria",
        surname: "Sanchis Oltra",
        password: "4321",
        age: 45,
        mobile: 631147890,
        email: "maria@gmail.com",
        location: "C/Colombari Agustí",
        collegial: 464624033,
        role: 2,
        speciality: 2,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 3,
        dni: "40693324K",
        name: "Carmen",
        surname: "Mateu Mahiques",
        password: "1357",
        age: 35,
        mobile: 721563002,
        email: "carmen@gmail.com",
        location: "Av/Reyes Católicos",
        collegial: null,
        role: 4,
        speciality: null,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 4,
        dni: "02788541P",
        name: "Jose",
        surname: "López Mateu",
        password: "2468",
        age: 5,
        mobile: 721563002,
        email: "carmen@gmail.com",
        location: "Av/Reyes Católicos",
        collegial: null,
        role: 4,
        speciality: null,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      },
      {
        id: 5,
        dni: "03641100A",
        name: "Pepe",
        surname: "Castells Montell",
        password: "1346",
        age: 38,
        mobile: 638921473,
        email: "pepe@gmail.com",
        location: "C/Artes escénicas",
        collegial: 390936552,
        role: 2,
        speciality: 1,
        createdAt: "2023-05-02 00:00:00",
        updatedAt: "2023-05-02 00:00:00"
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Recipes', null, {});

  }
};