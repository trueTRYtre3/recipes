import axios from 'axios'
const baseURL = '/api/recipes'


const getAll = async () => {
    const response = await axios.get(baseURL)
    return response.data
}

const getJSON = async () => {
    const response = await axios.get(`${baseURL}/json`)
    return response.data
}

const getRecommendedFood = async item => {
    const response = await axios.get(`${baseURL}/${item}`)
    console.log('recommend', response)
    return response
}

export default { getAll, getJSON, getRecommendedFood }