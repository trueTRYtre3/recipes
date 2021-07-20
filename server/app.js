const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const cors = require('cors')
const recipeRouter = require('./controllers/recipes')
const loginRouter = require('./controllers/login')
const userRouter = require('./controllers/users')

const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')


logger.info('Connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => logger.info('Connected to MongoDB'))
    .catch(error => logger.error('Error connection to MongoDB', error))

    
const app = express()
app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)

app.use('/api/recipes', recipeRouter)
app.use('/api/login', loginRouter)
app.use('/api/users', userRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app