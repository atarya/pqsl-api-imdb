const Sequelize = require('sequelize');
const db = require('../config/database')

const Movietogenre = db.define('movietogenre', {
    title : {
        type: Sequelize.STRING
    }
})

module.exports = Movietogenre;