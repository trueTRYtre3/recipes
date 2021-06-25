const recipeRouter = require('express').Router()
const axios = require('axios')
const config = require('../utils/config')
const data = require('../htmlscraper/params.json')



recipeRouter.get('/', async (request,response) => {
    const res = await axios.get(`${config.URL}&q=chicken`)
    response.json(res.data)
})

recipeRouter.get('/json', (request, response) => response.json(data))



module.exports = recipeRouter