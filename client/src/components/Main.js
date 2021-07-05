import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Carousel, Jumbotron, Container, Col, Image, Row, Button } from 'react-bootstrap';
import Search from './RecipeTypes/Search';

const Main = () => {
    const recipes = useSelector(state => state.recipes)

    console.log('recipes', recipes)
    let recommendedRecipe = recipes.hits ? recipes.hits.slice(0,4) : undefined

    return (
        <div>
            <h1 style={{ marginBottom: '1%'}}>Fun food recommendations</h1>
            <Carousel style={{ display: 'block', marginBottom: '1%', marginLeft: 'auto', marginRight: 'auto', width: '80%', borderStyle: '' }}>
                {recommendedRecipe && 
                recommendedRecipe.map(el => (
                    <Carousel.Item key={el.recipe.label}>
                        <Row>
                            <Col>
                                <Image
                                    src={el.recipe.image}
                                    alt={el.recipe.label} 
                                    fluid
                                    style={{ width: '360px' }}
                                />
                            </Col>
                            <Col 
                                style={{ textAlign: 'left', overflowWrap: 'break-word', inlineSize: '150px', marginTop: '40px' }}>
                                    <h2>{el.recipe.label}</h2>
                                    <Button>See Recipe</Button>
                            </Col>
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>
    
            <Jumbotron>
                <Container>
                    <h1>Find Recipes</h1>
                    <Search />
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Main
