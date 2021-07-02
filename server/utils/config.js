require('dotenv').config()

const PORT = process.env.PORT

const URL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.FOOD_ID}&app_key=${process.env.FOOD_KEY}&imageSize=LARGE&field=image`

module.exports = {
    PORT, URL
}