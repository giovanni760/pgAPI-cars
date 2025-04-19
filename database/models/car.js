'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Car.init({
    matricula: DataTypes.STRING,
    modelo: DataTypes.STRING,
    marca: DataTypes.STRING,
    age: DataTypes.INTEGER,
    color: DataTypes.TEXT,
    cilindros: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};