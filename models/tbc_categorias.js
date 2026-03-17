'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbc_Categorias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbc_Categorias.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tbc_Categorias',
  });
  return tbc_Categorias;
};