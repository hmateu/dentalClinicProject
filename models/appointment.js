'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Appointment.init({
    date: DataTypes.DATE,
    price: DataTypes.FLOAT,
    assessment: DataTypes.STRING,
    dentist: DataTypes.INTEGER,
    patient: DataTypes.INTEGER,
    service: DataTypes.INTEGER,
    payment: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};