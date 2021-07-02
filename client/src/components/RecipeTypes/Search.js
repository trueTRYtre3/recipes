import React, { useState } from 'react'
import { Form, Button, Col, Tabs, Tab } from 'react-bootstrap'
import { useSelector } from 'react-redux'



const Search = () => {
    const { mealType, cuisineType, dishType, health } = useSelector(state => state.params)
    const [key, setKey] = useState('home')
    const [meal, changeMeal] = useState('')
    const [show, changeShow] = useState(false)
    const style = { display: show ? '' : 'none' }

    if (!mealType) return null

    console.log('meal', meal)
    return (
        <Form>
            <Form.Row>
                    <Col md={10}>
                        <Form.Control placeholder="Search Food" />
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Col>
            </Form.Row>
            <Button variant="link"  style={{ marginBottom: '1%' }} onClick={() => changeShow(!show)}>Advanced Search</Button>
            <fieldset style={style}>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="meal" title="Meal Type">
                    {mealType.map(meal => (
                    <Form.Check
                        key={meal}
                        type="radio"
                        label={meal}
                        name='meal'
                        id={`form${meal}`}
                        onClick={() => changeMeal(meal)}
                    />
                    ))}
                </Tab>
                <Tab eventKey="cuisine" title="Cuisine Type">
                    <Form.Group>
                        {cuisineType.map(cuisine => (
                        <Form.Check
                            key={cuisine}
                            type="radio"
                            label={cuisine}
                            name='cuisine'
                            id={`form${cuisine}`}
                        />
                        ))}
                    </Form.Group>
                </Tab>
                <Tab eventKey="dish" title="Dish Type">
                    <Form.Group>
                        {dishType.map(dish => (
                        <Form.Check
                            key={dish}
                            type="radio"
                            label={dish}
                            name='dish'
                            id={`form${dish}`}
                        />
                        ))}
                    </Form.Group>
                </Tab>
                <Tab eventKey="health" title="Health Type">
                    <Form.Group>
                    {health.map(h => (
                    <Form.Check
                        key={h}
                        type="checkbox"
                        label={h}
                        name="formHorizontalRadios"
                        id={`form${h}`}
                    />
                    ))}
                    </Form.Group>
                </Tab>
            </Tabs>
            </fieldset> 
        </Form>
    )
}

export default Search
