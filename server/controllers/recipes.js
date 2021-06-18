const recipeRouter = require('express').Router()
const axios = require('axios')
const config = require('../utils/config')



recipeRouter.get('/', async (request,response) => {
    const res = await axios.get(config.URL)
    response.json(res.data)
})



module.exports = recipeRouter