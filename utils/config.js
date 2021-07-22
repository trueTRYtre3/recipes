require('dotenv').config()

const PORT = process.env.PORT || 3001

const URL = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${process.env.FOOD_ID}&app_key=${process.env.FOOD_KEY}&imageSize=SMALL`

const MONGODB_URI = process.env.MONGODB_URI

module.exports = {
    PORT, URL, MONGODB_URI
}