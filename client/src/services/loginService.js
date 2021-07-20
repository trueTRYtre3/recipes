import axios from 'axios'
const baseURL = '/api/login'

const login = async loginObj => {
    const response = await axios.post(baseURL, loginObj)
    console.log(response)
    return response.data
}

export default { login }