const jwt = require('jsonwebtoken')
const logger = require('./logger')
const User = require('../models/user')

const requestLogger = (request, response, next) => {
    logger.info('Method: ', request.method)
    logger.info('Path: ', request.path)
    logger.info('Body: ', request.body)
    logger.info('---')
    next()
}

const tokenExtractor = (request, response, next) => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        request.token = authorization.substring(7)
    } 
    next()
}

const userExtractor = async (request, response, next) => {
    const decodeToken = jwt.verify(request.token, process.env.SECRET)
    if (!request.token || !decodeToken) {
        response.status(401).json({ error: 'token missing or invalid' })
    }
    request.user = await User.findById(decodeToken.id)
    next()
}


const unknownEndpoint = (request, response) => {
    response.status(400).send({ error: 'unknown endpoint' })
}

const errorHandler = (error,request, response, next) => {
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).send({ error: error.message })
    } else if (error.name === 'JsonWebTokenError') {
        return response.status(401).json({
            error: 'invalid token'
        })
    } else if (error.name === 'TokenExpiredError') {
        return response.status(401).json({
            error: 'token expired'
        })
    }

    logger.error(error.message)

    next(error)
}

module.exports = {
    requestLogger,
    tokenExtractor,
    userExtractor,
    unknownEndpoint,
    errorHandler
}