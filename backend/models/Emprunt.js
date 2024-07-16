const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Book = require('./book');

const Emprunt = sequelize.define('Emprunt', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date_emprunt: {
    type: DataTypes.DATE,
    allowNull: false
  },
  date_retour: {
    type: DataTypes.DATE,
    allowNull: true
  }
});


Emprunt.belongsTo(Book, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
Emprunt.belongsTo(User, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

module.exports = Emprunt;
