"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  Category.associate = (models) => {
    Category.belongsToMany(models.Product, {
<<<<<<< HEAD
      through: "CategoryProducts",
      foreignKey: "categoryId",
      as: "products",
=======
      through: 'CategoryProducts',
      foreignKey: 'categoryId',
      as: 'products'
>>>>>>> 83fc9f6ac2240bdf660e5491eca99a5cc8202431
    });
  };
  return Category;
};
