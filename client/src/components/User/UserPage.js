import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Row, Col, Image, Container } from 'react-bootstrap'
import { deleteRecipes } from '../../reducers/userReducer'


const UserPage = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    if (!user.recipes) {
        return (
            <h2 style={{ textAlign: 'center' }}>No User Signed In</h2>
        )
    }
    console.log('user', user)

    const deleteRecipe = (recipe) => {
        const filterRecipe = user.recipes.filter(el => el.shareAs !== recipe.shareAs)
        const newUser = {
            recipes: filterRecipe,
            username: user.username
        }
        dispatch(deleteRecipes(user.id, newUser))
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2 style={{ marginBottom: '25px' }}>{user.username}'s Saved Recipes</h2>
            <Container>
            {user.recipes.map(recipe =>
                <Row key={recipe.shareAs} 
                style={{ paddingBottom: '1%', marginBottom:'1%', borderBottom:'1px solid gray', marginLeft: 'auto' }}
                >
                    <Col xs={6} md={4}>
                        <Image src={recipe.image} thumbnail />
                    </Col>
                    <Col style={{ display: 'flex', alignItems: 'center'}}>
                        <h2 style={{ overflowWrap: 'break-word', inlineSize: '250px' }}>{recipe.label}</h2>
                    </Col>
                    <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <Button style={{ marginBottom: '10px' }}>See Recipe</Button>
                        <Button variant="danger" onClick={() => deleteRecipe(recipe)} style={{ marginTop: '10px' }}>
                            Delete Recipe
                        </Button>
                    </Col>
                </Row>
            )}
            </Container>
            <Button variant="danger" style={{ bottom: '1%', marginTop: '4%', marginBottom: '1%' }}>Delete Account</Button>
        </div>
    );
}

export default UserPage
