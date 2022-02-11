const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const db = require('./config/database')

const app = express();
const PORT = process.env.PORT || 3000

db.authenticate().then(() => console.log("Database Connected.")).catch((err) => console.log(err))


app.get('/', (req, res) => {
    res.send("Index")
})


app.listen(PORT, console.log("API listening to port: ", PORT));