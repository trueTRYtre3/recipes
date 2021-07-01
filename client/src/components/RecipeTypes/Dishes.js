import React from 'react'
import { useSelector } from 'react-redux'
import Grid from './Grid'

const Dishes = () => {
    const { dishType } = useSelector(state => state.params)

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Different Dishes</h2>
            <p>~Choose one dish type~</p>
            <br />
            {dishType && <Grid>{dishType}</Grid>}
        </div>
    )
}

export default Dishes
