import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'

const Cuisines = () => {
    const cuisine = useSelector(state => state.cuisineType)
    console.log(cuisine)

    return (
        <div>
            Different Cuisines
            <Form>
                {cuisine.map(type => (
                    <Form.Group key={type}>
                        <Button inline type='submit'>
                            {type}
                        </Button>
                    </Form.Group>
                ))}
            </Form>
        </div>
    );
}

export default Cuisines
