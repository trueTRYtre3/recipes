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
    const response = await axios.get(`${baseURL}/recommended/${item}`)
    return response.data
}

const getSearchFood = async uri => {
    const response = await axios.get(`${baseURL}/search/${uri}`)
    return response.data
}

export default { getAll, getJSON, getRecommendedFood, getSearchFood }