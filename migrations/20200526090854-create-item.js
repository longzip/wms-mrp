"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Items", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      length: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      width: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      height: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      typeId: {
        type: Sequelize.UUID,
        allowNull: true,
      },
      unitId: {
        type: Sequelize.UUID,
        allowNull: true,
      },
      imageUrl: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      woodTypeId: {
        type: Sequelize.UUID,
        allowNull: true,
      },
      moduleId: {
        type: Sequelize.UUID,
        allowNull: true,
      },
      volumn: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      factoryId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Items");
  },
};
