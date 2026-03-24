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
  tbc_Productos.associate = (models) => {
    tbc_Productos.hasMany(models.tbc_categorias, {
      foreignKey: 'id_categoria',
      as: 'tbc_Productos'
    })
  };
  
  return tbc_Categorias;
};