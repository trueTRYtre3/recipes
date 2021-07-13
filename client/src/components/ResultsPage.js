import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, Col, Row, Button, Image, Modal } from 'react-bootstrap'

const ResultsPage = () => {
    const [show, setShow] = useState(false)
    const { recipe } = useSelector(state => state.food)
    recipe && console.log(recipe)

    if (!recipe) return null

    return (
        // <div>
            <Container style={{ marginBottom: '2%', }}>
                <Row style={{ marginTop: '8px', marginBottom: '20px'}}>
                    <Col>
                        <Image 
                            width={350}
                            height={350}
                            src={recipe.image}
                            alt={recipe.label}
                            style={{ float: 'right', marginRight: '10%' }}
                        />
                    </Col>
                    <Col style={{ textAlign: 'left', overflowWrap: 'break-word', inlineSize: '140px', marginTop: '40px' }}>
                        <h2>{recipe.label}</h2>
                        <Button>Save Recipe</Button>
                        <a href={recipe.url} style={{ color: 'white', textDecoration: 'none' }}>
                            <Button style={{ display: 'block', marginTop: '5px'}} variant='success'>Get Recipe</Button>
                        </a>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col style={{ marginLeft: '4%', width: '90%' }}>
                        <Row style={{ borderBottom: "1px solid grey", width: '95%' }}>
                            <h3>{recipe.ingredientLines.length} Ingredients</h3>
                        </Row>
                        {recipe.ingredients.map((ingredient, i) => (
                            <Row style={{ textIndent: '12px', textAlign: 'left', overflowWrap: 'break-word', inlineSize: '400px', marginTop: '8px' }} key={i}>
                                {ingredient.text}
                            </Row>
                        ))}
                    </Col>
                    <Col style={{  marginRight: '4%', width: '90%' }}>
                        <Row style={{ borderBottom: "1px solid grey", width: '95%', marginBottom: '8px' }}>
                            <h3>Nutrition </h3>
                        </Row>
                        <Row style={{ borderBottom: "1px solid grey", width: '95%', display: 'flex', justifyContent: 'space-between', textAlign: 'center', marginBottom: '8px' }}>
                            <Col>
                                <p style={{ marginBottom: '0px' }}>{Math.round((recipe.calories/recipe.yield)) }</p>
                                <p>CALORIES/SERVING</p>
                            </Col>
                            <Col>
                                <p style={{ marginBottom: '0px' }}>{recipe.yield}</p>
                                <p>Servings</p>
                            </Col>
                            <Col>
                                <Button variant="info" onClick={() => setShow(true)} style={{ marginBottom: '0px' }}>Health Labels</Button>
                                <Modal show={show} onHide={() => setShow(false)}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Health Labels</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <ul>
                                            {recipe.healthLabels.map(label => (
                                                <li key={label}>{label}</li>
                                            ))}
                                        </ul>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={() => setShow(false)}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </Col>
                        </Row>
                        {Object.entries(recipe.totalNutrients).map(([key,value]) =>
                            recipe.totalDaily[key] &&
                            <Row key={key} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Col style={{ marginLeft: '3%' }}>
                                    <span style={{ fontWeight: 'bold'}}>{value.label}</span> {Math.round(value.quantity/recipe.yield)}{value.unit}
                                </Col>
                                <Col style={{ marginLeft: '30%' }}>
                                    {Math.round(recipe.totalDaily[key].quantity/recipe.yield)}%
                                </Col>
                            </Row> 
                        )}
                    </Col>
                </Row>
            </Container>

        // </div>
    )
}

export default ResultsPage
