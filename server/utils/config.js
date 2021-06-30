require('dotenv').config()

const PORT = process.env.PORT

const URL = `https://api.edamam.com/api/recipes/v2?app_id=${process.env.FOOD_ID}&app_key=${process.env.FOOD_KEY}&type=public`

// https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=91352ff6&app_key=8fd6fb32a16f60d28fcea34ace0b06b9&imageSize=LARGE&field=image

module.exports = {
    PORT, URL
}