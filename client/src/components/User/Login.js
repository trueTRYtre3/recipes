import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button, Alert } from "react-bootstrap";
import { useHistory } from 'react-router';
import { useField } from '../../hooks/custom';
import loginService from '../../services/loginService';
import { handleLogin } from '../../reducers/userReducer';

const Login = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const username = useField('text')
    const password = useField('password')
    const [show, changeShow] = useState(false)

    useEffect(() => {
        let time = setTimeout(() => {
            changeShow(false)
        }, 5000)

        return () => clearTimeout(time)
    })

    const alert = {
        display: show ? '' : 'none',
        width: '60%',
        margin: 'auto' 
    }

    const style = {
        textAlign: 'center',
        width: '70%',
        margin: 'auto'
    }

    const reset = () => {
        [username, password].forEach(value => value.reset())
    }

    const loginUser = async e => {
        e.preventDefault()
        try {
            const loggedUser = await loginService.login({
                username: username.main.value, 
                password: password.main.value
            })
            dispatch(handleLogin(loggedUser))
            history.push('/')
            reset()
        } catch (exception) {
            console.log(exception)
            changeShow(true)
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <Alert style={alert} variant='danger'>
                Incorrect username or password
            </Alert>
            <h2>Log in to discover the world of Food</h2>
            <Form onSubmit={loginUser}>
                <Form.Group>
                    <Form.Label>Enter Username</Form.Label>
                    <Form.Control id="Username" {...username.main} placeholder="Username" required style={style} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control id="Password" {...password.main} placeholder="Password" required style={style} />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ marginButton: 25 }}>
                    Submit
                </Button>
            </Form>
            <Button variant="link" onClick={() => history.push('/register')}>Don't have an account? Sign up!</Button>
        </div>
    );
}

export default Login