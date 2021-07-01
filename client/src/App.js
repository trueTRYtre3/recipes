import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { retrieveParams } from './reducers/recipeParamsReducer';
import { initialRecipes  } from './reducers/recipeReducer';
import Header from './components/Header'
import Main from './components/Main'
import Cuisines from './components/RecipeTypes/Cuisines';
import Dishes from './components/RecipeTypes/Dishes';
import Meals from './components/RecipeTypes/Meals';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const dispatch = useDispatch()

  // useEffect(async () => {
  //   dispatch(initialRecipes())
  // })

  useEffect(async () => {
      dispatch(retrieveParams())
  })

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
        </Switch>
      </div>
    </div>
  )
}

export default App;
