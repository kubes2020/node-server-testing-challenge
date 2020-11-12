const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const Cars = require('./cars/cars-model.js')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(morgan('dev'))

server.get('/cars', (req, res)=> {
    Cars.getAll()
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        res.status(500).json({ message: err.message })
    })
})

server.get('/', (req, res)=> {
    res.send("endpoint working")
})

module.exports = server

