import recipeService from "../services/recipeService"


export const searchFoods = data => dispatch => {
    dispatch({
        type: 'SEARCH',
        data: data
    })
}

export const recommendedFoods = (item) => {
    return async dispatch => {
        try {
            const response = await recipeService.getRecommendedFood(item)
            dispatch({
                type: 'RECOMMEND',
                data: response
            })
        } catch (exception) {
            console.log(exception)
        }
    }
}

const reducer = (state=[], action) => {
    switch (action.type) {
        case 'SEARCH':
            return action.data
        case 'RECOMMEND':
            return action.data
        default:
            return state
    }
}

export default reducer