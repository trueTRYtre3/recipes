


export const initialPage = data => dispatch => {
    dispatch({
        type: 'INITIAL',
        data
    })
}

export const searchPage = data => dispatch => {
    dispatch({
        type: 'NEXT',
        data
    })
}

export const previousPage = () => dispatch => {
    dispatch({
        type: 'PREVIOUS'
    })
}

export const firstPage = () => dispatch => {
    dispatch({
        type: 'FIRST'
    })
}

export const searchPageInitialized = () => dispatch => {
    const search = window.localStorage.getItem('search')
    if (search) {
        dispatch({
            type: 'STORED_SEARCH',
            data: JSON.parse(search)
        })
    }
}


const reducer = (state=[], action) => {
    switch (action.type) {
        case 'INITIAL':
            const firstArray = [action.data]
            window.localStorage.setItem(
                'search', JSON.stringify(firstArray)
            )
            return firstArray
        case 'NEXT':
            const nextArray = [...state, action.data]
            window.localStorage.setItem(
                'search', JSON.stringify(nextArray)
            )
            return nextArray
        case 'PREVIOUS':
            const previousArray = state.slice(0,-1)
            window.localStorage.setItem(
                'search', JSON.stringify(previousArray)
            )
            return previousArray
        case 'FIRST':
            const first = [state[0]]
            window.localStorage.setItem(
                'search', JSON.stringify(first)
            )
            return first
        case 'STORED_SEARCH':
            return action.data
        default:
            return state
    }
}

export default reducer