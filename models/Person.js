const Sequelize = require('sequelize');
const db = require('../config/database')

const Person = db.define('person', {
    title : {
        type: Sequelize.STRING
    }
})

module.exports = Person;