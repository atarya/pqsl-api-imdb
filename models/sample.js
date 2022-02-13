const Sequelize = require('sequelize');
const db = require('../config/database')

const Castinfo = db.define('castinfo', {
    title : {
        type: Sequelize.STRING
    }
})

module.exports = Castinfo;