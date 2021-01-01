require('dotenv').config();

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const http = require('http')

const app = express()


const PORT = process.env.PORT || 5000

// support parsing of application/json type post data
app.use(express.json())

// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: false }))

// Enabling cors
app.options('*', cors())
app.use(cors({ origin: 'http://localhost:5000' })) // giving access to a specific origin


const server = http.createServer(app);

/*
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})*/

app.use('/questions', require('./routes/questions') )


module.exports = app;