import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { handleLogout } from '../reducers/loginReducer'

const Header = () => {
    const login = useSelector(state => state.login)
    const dispatch = useDispatch()

    return (
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
                {login 
                ? <Nav>
                    <NavDropdown title={login.username} id="basic-nav-dropdown" alignRight>
                        <NavDropdown.Item as={Link} to='/user'>Account</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => dispatch(handleLogout())} >Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                : <Nav>
                    <Nav.Link as={Link} to='/login'>Log In</Nav.Link>
                    <Nav.Link as={Link} to='/register'>Sign In</Nav.Link>
                </Nav>
                }
            </Navbar.Collapse>
        </Navbar> 
    )
}

export default Header
