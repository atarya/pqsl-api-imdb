const Sequelize = require('sequelize');
const db = require('../config/database')

const Movie = db.define('movie', {
    movieId: uuid
    name : string
    release: date
    duration: integer
    cast: {
        director:
        writer:
        actors: [string]
    },
})

module.exports = Movie;