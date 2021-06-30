import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension"
import paramsReducer from './reducers/recipeParamsReducer'
import recipeReducer from './reducers/recipeReducer'

const reducer = combineReducers({
    params: paramsReducer,
    recipes: recipeReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store