'use strict';
module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define('Department', {
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
    typeId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    parentId: {
      type: DataTypes.UUID,
      allowNull: true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  Department.associate = function (models) {
    // associations can be defined here
    Department.belongsTo(Department, {
      as: 'parent',
      foreignKey: 'parentId'
    })
    Department.hasMany(Department, {
      as: 'children',
      foreignKey: 'parentId'
    })
    // Department.belongsToMany(Department, {as: 'descendents', foreignKey: 'ancestorId', through: DepartmentAncestor})
    // Department.belongsToMany(Department, {as: 'ancestors', foreignKey: 'folderId', through: DepartmentAncestor})
  };
  return Department;
};