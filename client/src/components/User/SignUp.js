import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, Button, Alert } from "react-bootstrap";
import { useHistory } from 'react-router';
import { useField } from '../../hooks/custom';
import loginService from '../../services/loginService';
import userService from '../../services/userService';
import { handleLogin } from '../../reducers/userReducer';

const SignUp = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const username = useField('text')
    const password = useField('password')
    const checkPassword = useField('password')
    const [alert, changeAlert] = useState('')

    const style = {
        textAlign: 'center',
        width: '70%',
        margin: 'auto'
    }

    const alertStyle = {
        width: '60%',
        margin: 'auto' 
    }

    const reset = () => {
        [username, password, checkPassword].forEach(value => value.reset())
    }

    const handleSignUp = async e => {
        e.preventDefault()
        if (password.main.value === checkPassword.main.value) {
            try {
                await userService.createUser({
                    username: username.main.value, 
                    password: password.main.value
                })
                const request = await loginService.login({
                    username: username.main.value, 
                    password: password.main.value
                })
                dispatch(handleLogin(request))
                history.push('/')
                reset()
            } catch (exception) {
                console.log(exception)
                changeAlert('invalid username or password')
                setTimeout(() => {
                    changeAlert('')
                }, 5000)
            }
        } else {
            changeAlert('passwords do not match')
            setTimeout(() => {
                changeAlert('')
            }, 5000)
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            {alert && 
            <Alert style={alertStyle} variant='danger'>
                {alert}
            </Alert>}
            <h2>Sign Up to discover the world of Food</h2>
            <Form onSubmit={handleSignUp}>
                <Form.Group>
                    <Form.Label>Enter Username</Form.Label>
                    <Form.Control id="Username" {...username.main} placeholder="Username" required style={style}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control id="Password" {...password.main} placeholder="Password" required style={style} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Reenter Password</Form.Label>
                    <Form.Control id="PasswordCheck" {...checkPassword.main} placeholder="Reenter Password" required style={style} />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ marginButton: 25 }}>
                    Submit
                </Button>
            </Form>
            <Button variant="link" onClick={() => history.push('/login')}>Already have an account? Log in</Button>
        </div>
    );
}

export default SignUp

