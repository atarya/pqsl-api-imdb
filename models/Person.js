const Sequelize = require('sequelize');
const db = require('../config/database')

const Person = db.define('Person', {
    personId: uuid,
    name : {
        type: Sequelize.STRING
    },
    birthYear : {
        type: Sequelize.INTEGER(11)
    },
    profession: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
    },
    country : {
        type: Sequelize.STRING
    }
})

module.exports = Person;