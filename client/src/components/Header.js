import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, Button } from 'react-bootstrap'

const Header = () => {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Global Menu</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/'>Cuisines</Nav.Link>
                    <Nav.Link as={Link} to='/'>Meal Types</Nav.Link>
                </Nav>
                {/* <Form inline>
                    <Button variant="outline-info">Sign In</Button>
                </Form> */}
            </Navbar> 
        </div>
    )
}

export default Header
