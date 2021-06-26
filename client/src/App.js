import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import recipeService from './services/recipeService';
import Header from './components/Header'
import Main from './components/Main'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // useEffect(async () => {
    // const response = await recipeService.getAll()
    // console.log(response)
  // })

  useEffect(async () => {
    const response = await recipeService.getJSON()
    console.log(response)
  })

  return(
    <div>
      <Header />
      <div class='container'>
        <br />
        <Switch>
          <Route path='/' exact component={Main} />
        </Switch>
      </div>
    </div>
  )
}

export default App;
