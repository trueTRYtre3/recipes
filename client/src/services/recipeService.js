import axios from 'axios'
const baseURL = '/api/recipes'


const getAll = async () => {
    const request = await axios.get(baseURL)
    return request.data
}

const getJSON = async () => {
    const request = await axios.get(`${baseURL}/json`)
    return request.data
}

export default { getAll, getJSON }