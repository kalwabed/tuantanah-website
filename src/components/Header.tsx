/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Button, Nav } from 'react-bootstrap'
import logo from '../img/logo.png'

const Header = ({ navlink = '' }) => {
    return (
        <Navbar
            bg="dark"
            variant="dark"
            expand="md"
            sticky="top"
            className="nav-font"
        >
            <Container>
                <Navbar.Brand href="#">
                    <img
                        src={logo}
                        alt="logo"
                        className="d-inline-block"
                        width="22"
                        height="22"
                    />
                    <span style={{ marginLeft: '2px' }} className="logo-font">
                        tuantanah
                    </span>
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
                    <Link to="/signin">
                        <Button className="mr-2" variant="outline-success">
                            Masuk
                        </Button>
                    </Link>
                    <Link to="signup">
                        <Button variant="success">Daftar</Button>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
