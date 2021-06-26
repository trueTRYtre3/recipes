import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import recipeService from './services/recipeService';
import Header from './components/Header'
import Main from './components'
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
      <br />
      <Switch>
        {/* <Route path='/' exact component={} /> */}
      </Switch>
      <div class='container'>
        <h1>Welcome to the world of FOOD</h1>
      </div>
    </div>
  )
}

export default App;
