const Sequelize = require('sequelize');
const db = require('../config/database')

const Movietocountry = db.define('movietocountry', {
    title : {
        type: Sequelize.STRING
    }
})

module.exports = Movietocountry;