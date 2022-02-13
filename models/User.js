const Sequelize = require('sequelize');
const db = require('../config/database')

const User = db.define('user', {
    userId:
    name : {
        type: Sequelize.STRING
    }
    ratings: {
        movieid: integer
    }
    reviews: {
        movieid: string
    }
})

module.exports = User;