const express = require('express')
require('express-async-errors')
const cors = require('cors')
const recipeRouter = require('./controllers/recipes')


const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/recipes', recipeRouter)

module.exports = app