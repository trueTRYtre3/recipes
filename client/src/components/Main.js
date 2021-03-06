import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { Carousel, Jumbotron, Container, Col, Image, Row, Button } from 'react-bootstrap';
import Search from './RecipeTypes/Search';
import { grabFood } from '../reducers/foodReducer';

const Main = () => {
    const dispatch = useDispatch()

    const recipes = useSelector(state => state.recipes)
    let recommendedRecipe = recipes.hits ? recipes.hits.slice(0,4) : undefined
    console.log('recipes', recommendedRecipe)



    return (
        <div>
            <h1 style={{ marginBottom: '1%'}}>Fun food recommendations</h1>
            <Carousel style={{ display: 'block', marginBottom: '1%', marginLeft: 'auto', marginRight: 'auto', width: '80%', borderStyle: '' }}>
                {recommendedRecipe && 
                recommendedRecipe.map(({recipe}) => (
                    <Carousel.Item key={recipe.label}>
                        <Row>
                            <Col>
                                <Image
                                    src={recipe.image}
                                    alt={recipe.label} 
                                    fluid
                                    style={{ width: '360px' }}
                                />
                            </Col>
                            <Col 
                                style={{ textAlign: 'left', overflowWrap: 'break-word', inlineSize: '150px', marginTop: '40px' }}>
                                    <h2>{recipe.label}</h2>
                                    <Button onClick={() => dispatch(grabFood(recipe))} as={Link} to='/food'>
                                        See Recipe
                                    </Button>
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
