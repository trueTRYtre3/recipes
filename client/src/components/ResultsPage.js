import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Col, Row, Button, Image } from 'react-bootstrap'

const ResultsPage = () => {
    const { recipe } = useSelector(state => state.food)
    // food && console.log('food', food.recipe)
    recipe && console.log(recipe)

    if (!recipe) return null

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            Hi THERE RESULTS PAGE
            {/* <Container>
                <Row>
                    <Col>
                        <Image 
                            width={300}
                            height={300}
                            src={recipe.image}
                            alt={recipe.label}
                        />
                    </Col>
                    <Col style={{ textAlign: 'left', overflowWrap: 'break-word', inlineSize: '150px', marginTop: '40px' }}>
                        <h2>{recipe.label}</h2>
                        <Button>Save Recipe</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row style={{ borderBottom: "1px solid black" }}>
                            <h3>{recipe.ingredientLines.length} Ingredients</h3>
                        </Row>
                        {recipe.ingredients.map(ingredient => (
                        <Row style={{ textIndent: '5%'}} key={ingredient.foodId}>
                            {ingredient.text}
                        </Row>
                        ))}
                    </Col>
                </Row>
            </Container> */}

        </div>
    )
}

export default ResultsPage
