'use strict';
const {
  Model
} = require('sequelize');
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
  User.init({
    dni: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.INTEGER,
    mobile: DataTypes.INTEGER,
    email: DataTypes.STRING,
    location: DataTypes.STRING,
    collegial: DataTypes.INTEGER,
    role: DataTypes.INTEGER,
    speciality: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};