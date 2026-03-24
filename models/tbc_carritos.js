'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbc_Carritos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbc_Carritos.init({
    id_usuario: DataTypes.INTEGER,
    fecha_creacion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'tbc_Carritos',
  });
  tbc_Usuarios.associate = (models) => {
    tbc_Usuarios.hasMany(models.tbc_carritos, {
      foreignKey: 'id_usuario',
      as: 'tbc_Usuarios'
    })
  };
  tbc_carritos_detalle.associate = (models) => {
    tbc_carritos_detalle.hasMany(models.tbc_Carritos, {
      foreignKey: 'id_carrito',
      as: 'tbc_carritos_detalle'
    })
  };
  return tbc_Carritos;
};