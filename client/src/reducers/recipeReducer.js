import recipeService from "../services/recipeService"

export const initialRecipes = () => {
    return async dispatch => {
        try {
            const response = await recipeService.getAll()
            dispatch({
                type: 'INITIAL',
                data: response
            })
        } catch (exception) {
            console.log(exception)
        }
    }
}

const reducer = (state=[], action) => {
    switch (action.type) {
        case 'INITIAL':
            return action.data
        default:
            return state
    }
}

export default reducer