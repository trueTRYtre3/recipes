import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension"
import paramsReducer from './reducers/recipeParamsReducer'
import recipeReducer from './reducers/recipeReducer'
import foodReducer from "./reducers/foodReducer"
import pageReducer from './reducers/paginationReducer'
import loginReducer from './reducers/loginReducer'

const reducer = combineReducers({
    params: paramsReducer,
    recipes: recipeReducer,
    food: foodReducer,
    page: pageReducer,
    login: loginReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store