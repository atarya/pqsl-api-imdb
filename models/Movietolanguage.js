const Sequelize = require('sequelize');
const db = require('../config/database')

const Movietolanguage = db.define('movietolanguage', {
    title : {
        type: Sequelize.STRING
    }
})

module.exports = Movietolanguage;