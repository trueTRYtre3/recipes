import axios from 'axios'
const baseURL = '/api/users'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = async () => {
    const response = await axios.get(baseURL)
    console.log(response)
    return response.data
}

const createUser = async newObject => {
    const response = await axios.post(baseURL, newObject)
    console.log(response)
    return response.data
}

const addComment = async (id, recipe) => {
    const response = await axios.post(`${baseURL}/${id}/recipe`, recipe)
    console.log(response)
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


export default { setToken, getAll, createUser, addComment, deleteUser }