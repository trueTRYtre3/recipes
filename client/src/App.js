import React, { useEffect } from 'react'
import recipeService from './services/recipeService';
import './App.css';

const App = () => {
  useEffect(async () => {
    const response = await recipeService.getAll()
    console.log(response)
  })

  return(
    <div>Hello</div>
  )
}

export default App;
