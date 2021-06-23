const jsonRecipes = require('express').Router()
const axios = require('axios')
const cheerio = require('cheerio')

jsonRecipes.get('/', async (request, response) => {
    const { data } = await axios.get('https://developer.edamam.com/edamam-docs-recipe-api')
    const $ = cheerio.load(data)
    console.log($('select').html())
    // response.json(cheerio.load(res))
})

module.exports = jsonRecipes
