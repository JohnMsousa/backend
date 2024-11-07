"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
<<<<<<< HEAD
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
=======
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
>>>>>>> 83fc9f6ac2240bdf660e5491eca99a5cc8202431
  User.associate = (models) => {
    User.hasMany(models.Address, {
      foreignKey: "userId",
      as: "addresses",
    });
  };
  return User;
};
