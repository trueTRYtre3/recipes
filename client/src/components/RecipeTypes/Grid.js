import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import recipeService from '../../services/recipeService'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { searchFood } from '../../reducers/foodReducer'

const Grid = (props) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const sendQuery = async (type) => {
        console.log(props.uri + type)
        try {
            let uri = props.uri + type
            const data = await recipeService.getSearchFood(uri)
            console.log('type', data)
            dispatch(searchFood(data))
            history.push('/search')
        } catch(exception) {
            console.log(exception)
        }
    }

    return (
        <Container>
            <Row>
                {props.children.map(type => (
                    <Col xs={4} style={{ paddingBottom: '2%' }} key={type}>
                        <Col style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="outline-info" type='submit' size="lg" onClick={() => sendQuery(type)}>
                                {type}
                            </Button>
                        </Col>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Grid
