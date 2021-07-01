import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

const Cuisines = () => {
    const { cuisineType } = useSelector(state => state.params)

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Different Cuisines</h2>
            <p>~Choose one cuisine type~</p>
            <br />
            {cuisineType &&
                <Container>
                    <Row>
                        {/* <Form> */}
                        {cuisineType.map(type => (
                            <Col xs={4} style={{ paddingBottom: '1%' }} >
                                <Col key={type} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Form>
                                        <Button variant="outline-info" type='submit' size="lg">
                                            {type}
                                        </Button>
                                    </Form>
                                </Col>
                            </Col>
                        ))}
                        {/* </Form> */}
                    </Row>
                </Container>
            }
        </div>
    );
}

export default Cuisines
