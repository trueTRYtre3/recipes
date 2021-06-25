const express = require('express')
require('express-async-errors')
const cors = require('cors')
const recipeRouter = require('./controllers/recipes')
const jsonRouter = require('./controllers/jsonRoute')


const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/recipes', recipeRouter)
app.use('/api/jsondata', jsonRouter)

module.exports = app