/*const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
});

module.exports = sequelize;
*/


const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('my_library', 'my_libraryUser', '1234', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;

