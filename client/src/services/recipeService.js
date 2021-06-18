import axios from 'axios'
const baseURL = '/api/recipes'


const getAll = async () => {
    const request = await axios.get(baseURL)
    return request
}

export default { getAll }