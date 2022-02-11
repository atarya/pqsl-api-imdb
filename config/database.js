const Sequelize = require('sequelize')
const db = new Sequelize('postgres', 'postgres', 'dbpass', {
    host: 'localhost',
    dialect: 'postgres'
  });

module.exports = db;