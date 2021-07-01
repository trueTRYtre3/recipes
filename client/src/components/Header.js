import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Header = () => {

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Global Menu</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <NavDropdown title="Types" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to='/cuisines'>Cuisines</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Meals</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Dishes</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                {/* <Form inline>
                    <Button variant="outline-info">Sign In</Button>
                </Form> */}
            </Navbar> 
        </div>
    )
}

export default Header
