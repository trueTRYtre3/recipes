import axios from 'axios'
const baseURL = '/api/users'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getUser = async (id) => {
    const response = await axios.get(`${baseURL}/${id}`)
    return response.data
}

const createUser = async newObject => {
    const response = await axios.post(baseURL, newObject)
    console.log(response)
    return response.data
}

const addComment = async (id, recipe) => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.post(`${baseURL}/${id}/recipe`, recipe, config)
    console.log('response', response)
    return response.data
}

const deleteUser = async id => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.delete(`${baseURL}/${id}`, config)
    console.log(response)
    return response
}


export default { setToken, getUser, createUser, addComment, deleteUser }