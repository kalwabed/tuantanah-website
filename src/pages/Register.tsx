import React from 'react'
import { Container, Row, Card, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import logo from '../logo.png'
import '../auth.css'

const Register = () => {
    return (
        <section className="h-100">
            <Container className="h-100">
                <Row className="justify-content-md-center h-100">
                    <div className="card-wrapper">
                        <div className="brand">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="card-fat">
                            <Card.Body>
                                <Card.Title as="h4">Sign Up</Card.Title>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Fullname</Form.Label>
                                        <Form.Control required type="text" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control required type="email" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            required
                                            type="password"
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Repeat Password</Form.Label>
                                        <Form.Control
                                            required
                                            type="password"
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Check
                                            custom
                                            id="checkbox"
                                            type="checkbox"
                                            label="Agree with our Terms and Conditions"
                                        />
                                    </Form.Group>

                                    <Form.Group className="m-0">
                                        <Button
                                            variant="success"
                                            block
                                            type="submit"
                                        >
                                            Sign Up
                                        </Button>
                                    </Form.Group>

                                    <div className="mt-4 text-center">
                                        already have an account?{' '}
                                        <Link to="/signin">sign in</Link>
                                    </div>
                                    <p className="text-center">
                                        go back to <Link to="/">home</Link>
                                    </p>
                                </Form>
                            </Card.Body>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Register
