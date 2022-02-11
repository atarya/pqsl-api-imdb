const Sequelize = require('sequelize');
const db = require('../config/database')

const Genre = db.define('genre', {
    title : {
        type: Sequelize.STRING
    }
})

module.exports = Genre;