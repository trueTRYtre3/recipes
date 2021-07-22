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
    return response.data
}

const addRecipe = async (id, recipe) => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.post(`${baseURL}/${id}/recipe`, recipe, config)
    return response.data
}

const deleteRecipe = async (id, user) => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.put(`${baseURL}/${id}/recipe`, user, config)
    return response.data
}

const deleteUser = async id => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.delete(`${baseURL}/${id}`, config)
    return response
}


export default { setToken, getUser, createUser, addRecipe, deleteRecipe, deleteUser }