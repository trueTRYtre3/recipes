
export const grabFood = food => dispatch => {
    dispatch({
        type: 'FOOD',
        data: food
    })
}

const reducer = (state='', action) => {
    switch (action.type) {
        case 'FOOD':
            return action.data
        default:
            return state
    }
}

export default reducer