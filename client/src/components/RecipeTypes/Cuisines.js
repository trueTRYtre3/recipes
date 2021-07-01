import React from 'react'
import { useSelector } from 'react-redux'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Grid from './Grid'

const Cuisines = () => {
    const { cuisineType } = useSelector(state => state.params)

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Different Cuisines</h2>
            <p>~Choose one cuisine type~</p>
            <br />
            {cuisineType && 
            <Grid>
                {cuisineType}
            </Grid>
                // <Container>
                //     <Row>
                //         {cuisineType.map(type => (
                //             <Col xs={4} style={{ paddingBottom: '1%' }} key={type}>
                //                 <Col style={{ display: 'flex', justifyContent: 'center' }}>
                //                     <Form>
                //                         <Button variant="outline-info" type='submit' size="lg">
                //                             {type}
                //                         </Button>
                //                     </Form>
                //                 </Col>
                //             </Col>
                //         ))}
                //     </Row>
                // </Container>
            }
        </div>
    );
}

export default Cuisines
