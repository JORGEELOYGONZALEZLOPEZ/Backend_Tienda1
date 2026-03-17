'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbc_Carrito_detalle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbc_Carrito_detalle.init({
    id_carrito: DataTypes.INTEGER,
    id_producto: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    precio_unitario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tbc_Carrito_detalle',
  });
  return tbc_Carrito_detalle;
};