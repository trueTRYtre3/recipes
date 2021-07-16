import React from 'react'
import { Form } from "react-bootstrap";
import { useHistory } from 'react-router';
import { useField } from '../../hooks/custom';

const SignUp = () => {
    const history = useHistory()
    const username = useField('text')
    const password = useField('password')
    const checkPassword = useField('password')

    return (
        <div>
            <h2>Sign Up to discover the world of Food</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Enter Username</Form.Label>
                    <Form.Control id="Username" {...username.main} placeholder="Username" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter Password</Form.Label>
                    <Form.Control id="Password" {...password.main} placeholder="Password" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Reenter Password</Form.Label>
                    <Form.Control id="PasswordCheck" {...checkPassword.main} placehold="Reenter Password" required />
                </Form.Group>
                <Button variant="primary" type="submit" style={{ marginButton: 25 }}>
                    Submit
                </Button>
            </Form>
            <Button variant="link">Already have an account? Log in</Button>
        </div>
    );
}

export default SignUp

