import axios from 'axios'
const baseURL = '/api/jsonRecipes'

const getAll = async () => {
    const response = await axios.get(baseURL)
    return response
}

export default { getAll }