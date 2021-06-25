const jsonRouter = require('express').Router()
const data = require('../htmlscraper/params.json')

jsonRouter.get('/', (request, response) => {
    response.json(data)
})

module.exports = jsonRouter