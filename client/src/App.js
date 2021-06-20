import React, { useEffect } from 'react'
import recipeService from './services/recipeService';
import Header from './components/Header'
import './App.css';

const App = () => {
  useEffect(async () => {
    // const response = await recipeService.getAll()
    // console.log(response)
  })

  return(
    <div>
      <Header />
      <div className='container'>
        Hello
      </div>
    </div>
  )
}

export default App;
