"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  Product.associate = (models) => {
    Product.belongsToMany(models.Category, {
<<<<<<< HEAD
      through: "CategoryProducts",
      foreignKey: "categoryId",
      as: "category",
=======
      through: 'CategoryProducts',
      foreignKey: 'categoryId',
      as: 'category'
>>>>>>> 83fc9f6ac2240bdf660e5491eca99a5cc8202431
    });
  };
  return Product;
};
