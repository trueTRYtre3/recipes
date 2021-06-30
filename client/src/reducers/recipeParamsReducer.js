import recipeService from '../services/recipeService';

export const retrieveParams = (category) => {
    return async dispatch => {
        try {
            const response = await recipeService.getJSON()
            dispatch({
                type: 'ALL_PARAMS',
                action: response.category
            })
        }
    }
}