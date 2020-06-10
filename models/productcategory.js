'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductCategory = sequelize.define('ProductCategory', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    completeName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    parentId: {
      type: DataTypes.UUID,
      allowNull: true
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
  ProductCategory.associate = function (models) {
    // associations can be defined here
    ProductCategory.hasMany(models.ProductProduct, {
      foreignKey: 'categId'
    })
  };

  // (async () => {
  //   await ProductCategory.sync({
  //     force: true
  //   });
  //   // let pro = new ProductProduct();
  //   // console.log(pro)
  // })();
  return ProductCategory;
};