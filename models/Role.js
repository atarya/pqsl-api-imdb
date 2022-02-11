const Sequelize = require('sequelize');
const db = require('../config/database')

const Role = db.define('role', {
    title : {
        type: Sequelize.STRING
    }
})

module.exports = Role;