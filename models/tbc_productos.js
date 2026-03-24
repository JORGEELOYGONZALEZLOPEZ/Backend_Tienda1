'use strict';
const {
  Model
} = require('sequelize');
const tbc_carrito_detalle = require('./tbc_carrito_detalle');
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
  tbc_Categorias.associate = (models) => {
    tbc_Categorias.hasMany(models.tbc_productos, {
      foreignKey: 'id_categoria',
      as: 'tbc_Productos'
    })
  };
  tbc_carrito_detalle.associate = (models) => {
    tbc_carrito_detalle.hasMany(models.tbc_productos, {
      foreignKey: 'id_producto',
      as: 'tbc_Productos'
    })
  };
  return tbc_Productos;
};