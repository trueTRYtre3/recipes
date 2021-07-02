import React, { useState } from 'react'
import { Form, Button, Col, Tabs, Tab } from 'react-bootstrap'
import { useSelector } from 'react-redux'




const Search = () => {
    const { mealType, cuisineType, dishType, health, diet } = useSelector(state => state.params)
    const [key, setKey] = useState('home')
    const [query, changeQuery] = useState('')
    const [meal, changeMeal] = useState('')
    const [cuisine, changeCuisine] = useState('')
    const [dish, changeDish] = useState('')
    const [healthParams, changehealthParams] = useState({})
    const [dietParams, changeDietParams] = useState({})
    const [show, changeShow] = useState(false)
    const style = { display: show ? '' : 'none' }

    if (!mealType) return null

    const resetStates = () => {
        setKey('home')
        changeMeal('')
        changeCuisine('')
        changeDish('')
        changehealthParams({})
        changeDietParams({})
        changeShow(false)
    }


    const sendRequest = (e) => {
        e.preventDefault()
        let uri = ''
        if (meal) {
            uri += `&mealType=${meal}`
        }
        if (cuisine) {
            uri += `&cuisineType=${cuisine}`
        }
        if (dish) {
            uri += `&dishType=${dish}`
        }
        if (Object.keys(healthParams).length) {
            Object.keys(healthParams).forEach((key) => uri+=`&health=${key}`)
        }
        if (Object.keys(dietParams).length) {
            Object.keys(dietParams).forEach((key) => uri+=`&diet=${key}`)
        }
        uri += `&q=${query}`
        console.log(uri)
    }

    const changeCheckBox = (text, state, changeState) => {
        if (!state[text]) {
            state[text] = true
        } else {
            delete state[text]
        }
        changeState({...state})
    }

    return (
        <Form onSubmit={sendRequest}>
            <Form.Row>
                <Col md={10}>
                    <Form.Control 
                        placeholder="Search Food" 
                        type="text"
                        value={query}
                        onChange={(event) => changeQuery(event.target.value)}     
                    />
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
                            name={`${mealType}`}
                            id={`form${meal}`}
                            onClick={() => changeMeal(meal)}
                        />
                        ))}
                    </Tab>
                    <Tab eventKey="cuisine" title="Cuisine Type">
                        {cuisineType.map(cuisine => (
                        <Form.Check
                            key={cuisine}
                            type="radio"
                            label={cuisine}
                            name='cuisine'
                            id={`form${cuisine}`}
                            onClick={() => changeCuisine(cuisine)}
                        />
                        ))}
                    </Tab>
                    <Tab eventKey="dish" title="Dish Type">
                        {dishType.map(dish => (
                        <Form.Check
                            key={dish}
                            type="radio"
                            label={dish}
                            name='dish'
                            id={`form${dish}`}
                            onClick={() => changeDish(dish)}
                        />
                        ))}
                    </Tab>
                    <Tab eventKey="health" title="Health">
                        {health.map(h => (
                        <Form.Check
                            key={h}
                            type="checkbox"
                            label={h}
                            id={`form${h}`}
                            onClick={() => changeCheckBox(h, healthParams, changehealthParams)}
                        />
                        ))}
                    </Tab>
                    <Tab eventKey="diet" title="Diet">
                        {diet.map(d => (
                        <Form.Check
                            key={d}
                            type="checkbox"
                            label={d}
                            id={`form${d}`}
                            onClick={() => changeCheckBox(d, dietParams, changeDietParams)}
                        />
                        ))}
                    </Tab>
                </Tabs>
            </fieldset> 
        </Form>
    )
}

export default Search
