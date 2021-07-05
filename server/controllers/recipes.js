const recipeRouter = require('express').Router()
const axios = require('axios')
const config = require('../utils/config')
const data = require('../htmlscraper/params.json')



recipeRouter.get('/', async (request,response) => {
    const res = await axios.get(`${config.URL}&q=chicken`)
    response.json(res.data)
})

recipeRouter.get('/json', (request, response) => response.json(data))


recipeRouter.get('/recommended/:item', async (request, response) => {
    const recipe = await axios.get(`${config.URL}&q=${request.params.item}`)
    recipe ? response.json(recipe.data) : response.status(404).end()
})

recipeRouter.get('/search/:uri', async (request, response) => {
    const { uri }  = request.params
    const recipe = await axios.get(`${config.URL}${uri}`)
    recipe ? response.json(recipe.data) : response.status(404).end()
})


module.exports = recipeRouter