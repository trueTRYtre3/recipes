import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const UserPage = () => {
    const { username } = useSelector(state => state.user)
    const history = useHistory()

    if (!username) {
        history.push('/')
    }

    return (
        <div>
            <h2>Welcome {username}</h2>
            <h2>Saved Recipes</h2>
            <Button variant="danger" style={{ bottom: 0, position: 'fixed' }}>Delete Account</Button>
        </div>
    );
}

export default UserPage
