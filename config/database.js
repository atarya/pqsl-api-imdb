const Sequelize = require('sequelize')
const db = new Sequelize('imdb', 'postgres', 'dbpass', {
    host: 'localhost',
    dialect: 'postgres'
  });

module.exports = db;