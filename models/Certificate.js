const Sequelize = require('sequelize');
const db = require('../config/database')

const Certificate = db.define('certificate', {
    title : {
        type: Sequelize.STRING
    }
})

module.exports = Certificate;