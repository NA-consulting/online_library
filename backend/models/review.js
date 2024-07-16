const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Book = require('./book');

const Review = sequelize.define('Review', {
  userId: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'id' }},
  bookId: { type: DataTypes.INTEGER, allowNull: false, references: { model: Book, key: 'id' }},
  rating: { type: DataTypes.INTEGER, allowNull: false },
  comment: { type: DataTypes.TEXT }
});

module.exports = Review;
