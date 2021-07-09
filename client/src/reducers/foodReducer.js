
export const grabFood = food => dispatch => {
    window.localStorage.setItem(
        'foodItem', JSON.stringify(food)
    )
    dispatch({
        type: 'FOOD',
        data: food
    })
}

export const foodStorage = () => dispatch => {
    const foodItem = window.localStorage.getItem('foodItem')
    if (foodItem) {
        dispatch({
            type: 'STORED',
            data: JSON.parse(foodItem)
        })
    }
}

const reducer = (state='', action) => {
    switch (action.type) {
        case 'FOOD':
            return action.data
        case 'STORED':
            return action.data
        default:
            return state
    }
}

export default reducer
