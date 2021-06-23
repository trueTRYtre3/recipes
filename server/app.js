const express = require('express')
require('express-async-errors')
const cors = require('cors')
const recipeRouter = require('./controllers/recipes')
const jsonRecipes = require('./controllers/jsonRecipes')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/recipes', recipeRouter)
app.use('/api/jsonRecipes', jsonRecipes)

module.exports = app