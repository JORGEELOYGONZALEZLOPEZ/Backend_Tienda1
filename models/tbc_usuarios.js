'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbc_Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbc_Usuarios.init({
    nombre: {
      type:DataTypes.STRING(100),
      allowNull: false
    },
    direccion: {
      type:DataTypes.STRING(100),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    rol:{
      type: DataTypes.ENUM('admin', 'cliente'),
      allowNUll: false,
      defaultValue: 'cliente'
    },
    fecha_registro: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'tbc_Usuarios',
  });
  tbc_Carritos.associate = (models) => {
    tbc_Carritos.hasMany(models.tbc_Usuario, {
      foreignKey: 'id_usuario',
      as: 'tbc_carritos'
    })
  };
  return tbc_Usuarios;
};