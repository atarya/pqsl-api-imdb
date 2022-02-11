const Sequelize = require('sequelize');
const db = require('../config/database')

const Company = db.define('company', {
    title : {
        type: Sequelize.STRING
    }
})

module.exports = Company;