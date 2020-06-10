"use strict";
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    "Item",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      length: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      width: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      height: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      TypeId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      unitId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      woodTypeId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      moduleId: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      volumn: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      factoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {}
  );
  Item.associate = function (models) {
    Item.belongsTo(models.Type);
  };
  return Item;
};
