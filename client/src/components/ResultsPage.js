import React from 'react'
import { useSelector } from 'react-redux'

const ResultsPage = () => {
    const food = useSelector(state => state.food)
    food && console.log('food', food.recipe)

    return (
        <div>
            Results for me
        </div>
    )
}

export default ResultsPage
