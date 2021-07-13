import React from 'react'
import { useSelector } from 'react-redux';
import { Card, Container, Row, Col, Button } from "react-bootstrap";

const SearchPage = () => {
    const food = useSelector(state => state.food)
    console.log('search', food)


    return (
        <Container>
            <Row>
                {food.hits && food.hits.map(({recipe}) =>
                    <Col xs={6} md={4} key={recipe.label}>
                        <Col>
                            <Card style={{ width: '18rem', marginBottom: '5%'  }}>
                                <Card.Img variant="left" src={recipe.image} />
                                <Card.Body>
                                    <Card.Text><strong>{recipe.label}</strong></Card.Text>
                                    <Button variant="primary">See Recipe</Button>
                                </Card.Body>

                            </Card>
                        </Col>
                    </Col>
                )}
            </Row>
        </Container>
    )
}

export default SearchPage