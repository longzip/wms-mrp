'use strict';

const {
  v4: uuidv4
} = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Types', [{
        id: uuidv4(),
        code: "S",
        name: "Vật tư",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        code: "W",
        name: "Gỗ thô",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        code: "M",
        name: "Bán thành phẩm/chi tiết/cụm",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        code: "P",
        name: "Thành phẩm",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        code: "C",
        name: "Hoá chất",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        code: "TPNT",
        name: "Thành phẩm nội thất",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        code: "VTNT",
        name: "Vật tư nội thất",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        code: "VNL",
        name: "Ván nguyên liệu",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        code: "VBTP",
        name: "Ván bán thành phẩm",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        code: "VTP",
        name: "Ván thành phẩm",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        code: "TMV",
        name: "Thu mua Ván",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Types', null, {});

  }
};