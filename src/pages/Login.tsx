import React, { useState } from 'react'
import { Row, Card, Form, Button } from 'react-bootstrap'

import '../auth.css'
import logo from '../logo.png'
import { Link } from 'react-router-dom'

const Login = () => {
    const [validated, setValidated] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSubmit = (event: React.FormEvent<HTMLInputElement>): void => {
        event.preventDefault()
        setValidated(true)
        const form = event.currentTarget

        // @ts-ignore
        if (form.checkValidity() === false) {
            event.stopPropagation()
        } else {
            // console.log(`email:${email}, password:${password}`)
            setEmail('')
            setPassword('')
            setValidated(false)
        }
    }

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
                            <Form
                                noValidate
                                validated={validated}
                                onSubmit={handleSubmit}
                            >
                                <Form.Group>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.currentTarget.value)
                                        }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Mohon sertakan email yang valid!
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback>
                                        Terlihat bagus!
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.currentTarget.value)
                                        }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Mohon sertakan password yang valid!
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback>
                                        Terlihat bagus!
                                    </Form.Control.Feedback>
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

export default Login
