'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductProduct = sequelize.define('ProductProduct', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    defaultCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    categId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    volume: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    width: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    height: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    length: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {});
  ProductProduct.associate = function (models) {
    // associations can be defined here
    ProductProduct.belongsTo(models.ProductCategory, {
      foreignKey: 'categId'
    })
  };
  // (async () => {
  //   await ProductProduct.sync({
  //     force: true
  //   });
  //   // let pro = new ProductProduct();
  //   // console.log(pro)
  // })();
  return ProductProduct;
};