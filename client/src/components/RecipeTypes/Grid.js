import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

const Grid = (props) => {
    return (
        <Container>
            <Row>
                {props.children.map(type => (
                    <Col xs={4} style={{ paddingBottom: '1%' }} key={type}>
                        <Col style={{ display: 'flex', justifyContent: 'center' }}>
                            <Form>
                                <Button variant="outline-info" type='submit' size="lg">
                                    {type}
                                </Button>
                            </Form>
                        </Col>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Grid
