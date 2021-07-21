import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'


const UserPage = () => {
    const user = useSelector(state => state.user)

    if (!user.username) {
        return (
            <h2 style={{ textAlign: 'center' }}>No User Signed In</h2>
        )
    }
    console.log('user', user)

    return (
        <div>
            <h2>Welcome {user.username}</h2>
            <h2>Saved Recipes</h2>
            <Button variant="danger" style={{ bottom: 0, position: 'fixed' }}>Delete Account</Button>
        </div>
    );
}

export default UserPage
