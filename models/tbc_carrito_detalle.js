'use strict';
const {
  Model
} = require('sequelize');
const tbc_productos = require('./tbc_productos');
const tbc_carritos = require('./tbc_carritos');
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
  tbc_productos.associate = (models) => {
    tbc_productos.hasMany(models.tbc_carritos_detalle, {
      foreignKey: 'id_producto',
      as: 'tbc_Productos'
    })
  };
  tbc_carritos.associate = (models) => {
    tbc_carritos.hasMany(models.tbc_carritos_detalle, {
      foreignKey: 'id_carrito',
      as: 'tbc_carritos'
    })
  };
  return tbc_Carrito_detalle;
};