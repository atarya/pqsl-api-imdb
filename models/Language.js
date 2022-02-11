const Sequelize = require('sequelize');
const db = require('../config/database')

const Language = db.define('language', {
    title : {
        type: Sequelize.STRING
    }
})

module.exports = Language;