import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { retrieveParams } from './reducers/recipeParamsReducer';
import { recommendedFoods  } from './reducers/recipeReducer';
import { foodStorage } from './reducers/foodReducer';
import { searchPageInitialized } from './reducers/paginationReducer';
import Header from './components/Header'
import Main from './components/Main'
import Cuisines from './components/RecipeTypes/Cuisines';
import Dishes from './components/RecipeTypes/Dishes';
import Meals from './components/RecipeTypes/Meals';
import ResultsPage from './components/ResultsPage';
import SearchPage from './components/RecipeTypes/SearchPage';
import SignUp from './components/User/SignUp';
import Login from './components/User/Login';
import UserPage from './components/User/UserPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { isLogged } from './reducers/userReducer';




const App = () => {
  const dispatch = useDispatch()
  const foods = ["pizza", "chicken", "pasta", "pork", "udon"]

  useEffect(() => {
    let food = foods[Math.floor(Math.random() * foods.length)]
    dispatch(recommendedFoods(food))
  }, [])

  useEffect(() => {
      dispatch(retrieveParams())
      dispatch(foodStorage())
      dispatch(searchPageInitialized())
      dispatch(isLogged())
  }, [])


  return(
    <div>
      <Header />
      <div className='container'>
        <br />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/cuisines' component={Cuisines} />
          <Route path='/meals' component={Meals} />
          <Route path='/dishes' component={Dishes} />
          <Route path='/food' component={ResultsPage} />
          <Route path='/search' component={SearchPage} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={SignUp} />
          <Route path='/user' component={UserPage} />
        </Switch>
      </div>
    </div>
  )
}

export default App;
