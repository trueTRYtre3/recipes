import React, { useState } from 'react'
import { Form, Button, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'



const Search = () => {
    const { mealType, cuisineType } = useSelector(state => state.params)
    const [show, changeShow] = useState(false)
    const style = { display: show ? '' : 'none' }

    if (!mealType) return null

    return (
        <Form>
            <Form.Group>
                <Form.Control placeholder="Search Food" />
                <Button variant="light" onClick={() => changeShow(!show)}>Advanced Search</Button>
            </Form.Group>
            <fieldset style={style}>
                <Form.Group as={Row}>
                    <Col >
                        {mealType.map(meal => (
                            <Form.Check
                                type="radio"
                                label={meal}
                                name="formHorizontalRadios"
                                id={`form${meal}`}
                            />
                        ))}
                    </Col>
                    <Col>
                        {cuisineType.map(meal => (
                            <Form.Check
                                type="radio"
                                label={meal}
                                name="formHorizontalRadios"
                                id={`form${meal}`}
                            />
                        ))}
                    </Col>
                </Form.Group>
            </fieldset> 
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}

export default Search
