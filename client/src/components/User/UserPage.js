import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Button, Row, Col, Image, Container, Modal } from 'react-bootstrap'
import { deleteRecipes } from '../../reducers/userReducer'
import { grabFood } from '../../reducers/foodReducer'
import userService from '../../services/userService'
import { handleLogout } from '../../reducers/loginReducer'


const UserPage = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const [show, setShow] = useState(false)
    const history = useHistory()

    if (!user.recipes) {
        return (
            <h2 style={{ textAlign: 'center' }}>No User Signed In</h2>
        )
    }

    const deleteRecipe = (recipe) => {
        const filterRecipe = user.recipes.filter(el => el.shareAs !== recipe.shareAs)
        const newUser = {
            recipes: filterRecipe,
            username: user.username
        }
        dispatch(deleteRecipes(user.id, newUser))
    }

    const deleteAccount = async () => {
        try {
            await userService.deleteUser(user.id)
            dispatch(handleLogout())
            history.push('/')
        } catch(exception) {
            console.log(exception)
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                        <Button style={{ marginBottom: '10px' }} onClick={() => dispatch(grabFood(recipe))} as={Link} to='/food'>
                            See Recipe
                        </Button>
                        <Button variant="danger" onClick={() => deleteRecipe(recipe)} style={{ marginTop: '10px' }}>
                            Delete Recipe
                        </Button>
                    </Col>
                </Row>
            )}
            </Container>
            <Button variant="danger" 
            style={{ bottom: '1px', marginTop: '4%', marginBottom: '1%' }} 
            onClick={() => setShow(true)}
            >
                Delete Account
            </Button>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{user.username}'s Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete your account?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={deleteAccount}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default UserPage
