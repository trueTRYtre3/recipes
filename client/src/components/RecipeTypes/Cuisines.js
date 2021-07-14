import React from 'react'
import { useSelector } from 'react-redux'
import Grid from './Grid'

const Cuisines = () => {
    const { cuisineType } = useSelector(state => state.params)

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Different Cuisines</h2>
            <p>~Choose one cuisine type~</p>
            <br />
            {cuisineType && <Grid uri={'&cuisineType='}>{cuisineType}</Grid>}
        </div>
    );
}

export default Cuisines
