const Sequelize = require('sequelize');
const db = require('../config/database')

const Distribution = db.define('distribution', {
    title : {
        type: Sequelize.STRING
    }
})

module.exports = Distribution;