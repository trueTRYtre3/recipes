import recipeService from '../services/recipeService';

export const retrieveParams = () => async dispatch => {
    try {
        const response = await recipeService.getJSON()
        dispatch({
            type: 'ALL_PARAMS',
            data: response
        })
    } catch (exception) {
        console.log(exception)
    }
}


const reducer = (state={}, action) => {
    switch (action.type) {
        case 'ALL_PARAMS':
            return action.data
        default:
            return state
    }
}

export default reducer