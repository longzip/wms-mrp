"use strict";
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define(
    "Type", {
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    }, {}
  );
  Type.associate = function (models) {
    // associations can be defined here
    Type.hasMany(models.Item);
  };
  return Type;
};