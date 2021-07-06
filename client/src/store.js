import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension"
import paramsReducer from './reducers/recipeParamsReducer'
import recipeReducer from './reducers/recipeReducer'
import foodReducer from "./reducers/foodReducer"

const reducer = combineReducers({
    params: paramsReducer,
    recipes: recipeReducer,
    food: foodReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store