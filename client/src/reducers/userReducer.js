import userService from "../services/userService"

export const userPage = id => async dispatch => {
    const response = await userService.getUser(id)
    window.localStorage.setItem(
        'userPage', JSON.stringify(response)
    )
    dispatch({
        type: 'USER',
        data: response
    })
}

export const userExists = () => dispatch => {
    let user = window.localStorage.getItem('userPage')
    if (user) {
        user = JSON.parse(user)
        dispatch({
            type: 'EXISTING_USER',
            data: user
        })
    }
}

export const addRecipes = (id, recipeObj) => async dispatch => {
    const recipe = await userService.addRecipe(id, recipeObj)
    window.localStorage.setItem(
        'userPage', JSON.stringify(recipe)
    )
    dispatch({
        type: 'ADD_RECIPE',
        data: recipe
    })
}

export const deleteRecipes = (id, userObj) => async dispatch => {
    const user = await userService.deleteRecipe(id, userObj)
    window.localStorage.setItem(
        'userPage', JSON.stringify(user)
    )
    dispatch({
        type: 'DELETE_RECIPE',
        data: user
    })
}

export const userEnd = () => dispatch => {
    window.localStorage.removeItem('userPage')
    dispatch({
        type: 'END',
        data: null
    })
}

const reducer = (state={}, action) => {
    switch (action.type) {
        case 'USER':
            return action.data
        case 'ADD_RECIPE':
            return action.data
        case 'EXISTING_USER':
            return action.data
        case 'DELETE_RECIPE':
            return action.data
        case 'END':
            return {}
        default:
            return state
    }
}

export default reducer