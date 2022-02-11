const Sequelize = require('sequelize');
const db = require('../config/database')

const Movie = db.define('movie', {
    title : {
        type: Sequelize.STRING
    }
})

module.exports = Movie;