const Sequelize = require('sequelize');
const db = require('../config/database')

const Production = db.define('production', {
    title : {
        type: Sequelize.STRING
    }
})

module.exports = Production;