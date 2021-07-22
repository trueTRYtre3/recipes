import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col, Button, Pagination } from "react-bootstrap";
import { firstPage, previousPage, searchPage } from '../../reducers/paginationReducer';
import recipeService from '../../services/recipeService';
import { grabFood } from '../../reducers/foodReducer';

const SearchPage = () => {
    const dispatch = useDispatch()
    const page = useSelector(state => state.page)
    const viewPage = page.length ? page[page.length-1] : undefined


    const nextClick = async () => {
        const uri = encodeURIComponent(viewPage._links.next.href)
        const nextPage = await recipeService.getRecipe(uri)
        dispatch(searchPage(nextPage))
    }

    const previousClick = () => {
        dispatch(previousPage())
    }

    const firstClick = () => {
        dispatch(firstPage())
    }

    if (!viewPage) return null

    return (
        <div>
            <Container>
                <Row>
                    {viewPage.hits && viewPage.hits.map(({recipe}, el) =>
                        <Col xs={6} md={4} key={el}>
                            <Col>
                                <Card style={{ width: '18rem', marginBottom: '5%'  }}>
                                    <Card.Img variant="left" src={recipe.image} />
                                    <Card.Body>
                                        <Card.Text><strong>{recipe.label}</strong></Card.Text>
                                        <Button variant="primary" onClick={() => dispatch(grabFood(recipe))} as={Link} to='/food'>
                                            See Recipe
                                        </Button>
                                    </Card.Body>

                                </Card>
                            </Col>
                        </Col>
                    )}
                </Row>
            </Container>
            <Pagination size="lg" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2%', marginTop: '2%' }}>
                {page.length > 1 &&
                <React.Fragment>
                    <Pagination.First onClick={firstClick} />
                    <Pagination.Prev onClick={previousClick} />
                </React.Fragment>
                }
                {viewPage._links.next &&  <Pagination.Next onClick={nextClick} />}
            </Pagination>
        </div>
    )
}

export default SearchPage