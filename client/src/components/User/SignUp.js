import React from 'react'
import { Form, Button } from "react-bootstrap";
import { useHistory } from 'react-router';
import { useField } from '../../hooks/custom';

const SignUp = () => {
    const history = useHistory()
    const username = useField('text')
    const password = useField('password')
    const checkPassword = useField('password')

    const style = {
        textAlign: 'center',
        width: '70%',
        margin: 'auto'
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Sign Up to discover the world of Food</h2>
            <Form>
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

