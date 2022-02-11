const Sequelize = require('sequelize');
const db = require('../config/database')

const Movietocertificate = db.define('movietocertificate', {
    title : {
        type: Sequelize.STRING
    }
})

module.exports = Movietocertificate;