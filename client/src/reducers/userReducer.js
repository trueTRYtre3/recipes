import userService from '../services/userService'

export const handleLogin = loginObj => dispatch => {
    userService.setToken(loginObj.token)
    window.localStorage.setItem(
        'loggedRecipeUser', JSON.stringify(loginObj)
    )
    dispatch({
        type: 'LOGIN',
        data: loginObj
    })
}

export const isLogged = () => dispatch => {
    const loggedUser = window.localStorage.getItem('loggedRecipeUser')
    if (loggedUser) {
        const tokenUser = JSON.parse(loggedUser)
        userService.setToken(tokenUser.token)
        dispatch({
            type: 'IS_LOGGED',
            data: tokenUser
        })
    }
}

export const handleLogout = () => dispatch => {
    window.localStorage.removeItem('loggedRecipeUser')
    dispatch({
        type: 'LOGOUT',
        data: null
    })
}

const reducer = (state='', action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.data
        case 'IS_LOGGED':
            return action.data
        case 'LOGOUT':
            return ''
        default:
            return state
    }
}

export default reducer