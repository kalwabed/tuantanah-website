import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Button, Nav } from 'react-bootstrap'
import logo from '../logo.svg'

const Header = ({ navlink = '' }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="md" sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        alt="logo"
                        className="d-inline-block"
                        width="45"
                        height="45"
                    />
                    Tuan Tanah
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Item>
                            <Link
                                to="/"
                                className={`nav-link mr-auto ${
                                    navlink === '/' ? 'active' : null
                                }`}
                            >
                                Home
                            </Link>
                        </Nav.Item>
                        <Link
                            to="/property"
                            className={`nav-link mr-auto ${
                                navlink === 'property' ? 'active' : null
                            }`}
                        >
                            Property
                        </Link>
                        <Link
                            to="#"
                            className={`nav-link mr-3 ${
                                navlink === 'faq' ? 'active' : null
                            }`}
                        >
                            Faq
                        </Link>
                    </Nav>
                    <Button variant="primary" href="#">
                        Daftar
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
