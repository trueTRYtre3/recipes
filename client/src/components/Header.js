import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Header = () => {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to='/'>Global Food</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <NavDropdown title="Types" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to='/cuisines'>Cuisines</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/meals'>Meals</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/dishes'>Dishes</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link >Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
        </div>
    )
}

export default Header
