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

app.use('/person', require('./routes/person'));
app.use('/movie', require('./routes/movie'));
app.use('/shows', require('./routes/shows'));
app.use('/users', require('./routes/users'));
app.use('/info', require('./routes/info'));

app.listen(PORT, console.log("API listening to port: ", PORT));