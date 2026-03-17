'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbc_Productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbc_Productos.init({
    nombre: DataTypes.STRING,
    Descripcio: DataTypes.STRING,
    Precio: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    id_categoria: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tbc_Productos',
  });
  return tbc_Productos;
};