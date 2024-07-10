const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('Book', {
  title: { type: DataTypes.STRING, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
  ISBN: { type: DataTypes.STRING, allowNull: false, unique: true },
  genre: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  image: { type: DataTypes.STRING },
  format: { type: DataTypes.STRING },
  interactive: { type: DataTypes.BOOLEAN },
  publication_date: { type: DataTypes.DATE },
  average_rating: { type: DataTypes.FLOAT }
});

module.exports = Book;
