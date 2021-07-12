import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Col, Row, Button, Image } from 'react-bootstrap'

const ResultsPage = () => {
    const { recipe } = useSelector(state => state.food)
    recipe && console.log(recipe)

    if (!recipe) return null

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Container>
                <Row style={{ marginTop: '8px', marginBottom: '16px'}}>
                    <Col>
                        <Image 
                            width={350}
                            height={350}
                            src={recipe.image}
                            alt={recipe.label}
                            style={{ float: 'right', marginRight: '25px' }}
                        />
                    </Col>
                    <Col style={{ textAlign: 'left', overflowWrap: 'break-word', inlineSize: '140px', marginTop: '40px' }}>
                        <h2>{recipe.label}</h2>
                        <Button>Save Recipe</Button>
                        <Button style={{ display: 'block', marginTop: '5px'}} variant='success'>Get Recipe</Button>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Row style={{ borderBottom: "2px solid grey"}}>
                            <h3>{recipe.ingredientLines.length} Ingredients</h3>
                        </Row>
                        {recipe.ingredients.map((ingredient, i) => (
                            <Row style={{ textIndent: '12px', textAlign: 'left', overflowWrap: 'break-word', inlineSize: '400px', marginTop: '8px' }} key={i}>
                                {ingredient.text}
                            </Row>
                        ))}
                    </Col>
                    <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Row style={{ borderBottom: "2px solid grey", width: '40%' }}>
                            <h3>Nutrition</h3>
                        </Row>
                        <Row style={{ borderBottom: "1px solid black", width: '40%'}}>
                            <Col>
                                {Math.round((recipe.calories/recipe.yield) * 100) / 100}
                                <p>CALORIES/SERVING</p>
                            </Col>
                            <Col>
                                <p>{recipe.yield} servings</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default ResultsPage
