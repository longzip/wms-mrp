'use strict';

const {
  v4: uuidv4
} = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        id: uuidv4(),
        name: 'Quan tri cap cao',
        username: 'sa',
        email: 'sa@woodsland.com.vn',
        password: '$2b$10$AdFxjhnwuU2MDGLDinRueOdPEdlTamHMi0JW1KLz8xhE27RMCHm6W',
        role: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        id: uuidv4(),
        name: 'TEST VALITY',
        username: 'TEST2',
        email: 'test2@woodsland.com.vn',
        password: '$2b$10$J.W16rsM7a2c8NXjy9aK0OHkx5qJaoZCrqoEvS1US8sTtwKP32ELi',
        role: 'USER',
        createdAt: new Date(),
        updatedAt: new Date()

      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});

  }
};