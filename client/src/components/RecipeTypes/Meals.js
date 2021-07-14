import React from 'react'
import { useSelector  } from 'react-redux'
import Grid from './Grid'

const Meals = () => {
    const { mealType } = useSelector(state => state.params)

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Different Meals</h2>
            <p>~Choose one meal type~</p>
            <br />
            {mealType && <Grid uri={'&mealType='}>{mealType}</Grid>}
        </div>
    )
}

export default Meals
