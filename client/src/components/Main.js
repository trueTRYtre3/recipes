import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Carousel, Jumbotron, Container, Col, Image, Row } from 'react-bootstrap';
import Search from './RecipeTypes/Search';

const Main = () => {
    const recipes = useSelector(state => state.recipes)

    console.log('recipes', recipes)
    let recommendedRecipe = recipes.hits ? recipes.hits.slice(0,3) : undefined
    console.log(recommendedRecipe)

    return (
        <div>
            <h1>Fun food recommendations</h1>
            <Carousel style={{ display: 'block', marginBottom: '2%', marginLeft: 'auto', marginRight: 'auto', width: '75%' }}>
                {recommendedRecipe && 
                recommendedRecipe.map(el => (
                    <Carousel.Item>
                        <Row>
                            <Col>
                                <Image
                                    // className="d-block w-50"
                                    src={el.recipe.image}
                                    alt={el.recipe.label} 
                                    fluid
                                    style={{ width: '360px' }}
                                />
                            </Col>
                            <Col 
                                style={{ textAlign: 'left', overflowWrap: 'break-word', inlineSize: '150px', marginTop: '40px' }}>
                                {/* <Carousel.Caption 
                                    style={{ textAlign: 'right', color: 'black', wordWrap: 'break-word', width: '400px' }}
                                > */}
                                    <h2>{el.recipe.label}</h2>
                                    <p>Click here</p>
                                {/* </Carousel.Caption> */}
                            </Col>
                        </Row>
                    </Carousel.Item>
                ))
                }
            </Carousel>
            {/* <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
            <Jumbotron>
                <Container>
                    <h1>Find a Recipe</h1>
                    <Search />
                </Container>
            </Jumbotron>
        </div>
    );
}

export default Main
