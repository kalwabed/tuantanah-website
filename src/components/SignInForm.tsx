import React from 'react'
import { Row, Card, Form, Button } from 'react-bootstrap'

import logo from '../logo.png'
import { Link } from 'react-router-dom'

const SignInForm = () => {
    return (
        <section className="h-100">
            <Row className="justify-content-md-center h-100">
                <div className="card-wrapper">
                    <div className="brand">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="card-fat">
                        <Card.Body>
                            <Card.Title as="h4">Sign In</Card.Title>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control required type="email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" required />
                                </Form.Group>
                                <Form.Group className="m-0">
                                    <Button
                                        type="submit"
                                        variant="success"
                                        block
                                    >
                                        Sign In
                                    </Button>
                                </Form.Group>
                                <div className="mt-4 text-center">
                                    don't have an account?{' '}
                                    <Link to="/signup">sign up</Link>
                                </div>
                                <p className="text-center">
                                    go back to <Link to="/">home</Link>
                                </p>
                            </Form>
                        </Card.Body>
                    </div>
                </div>
            </Row>
        </section>
    )
}

export default SignInForm
