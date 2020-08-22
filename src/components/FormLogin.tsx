/* eslint-disable react/prop-types */
import React from 'react'
import { Row, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import '../auth.css'
import logo from '../img/logo.png'
import type { TLoginProps } from '../types/index.types'
import ButtonLoading from '../elements/ButtonLoading'

const FormLogin: React.FC<TLoginProps> = ({
    loading,
    validated,
    handleSubmit,
    email,
    setEmail,
    password,
    setPassword,
}) => {
    return (
        <section className="h-100">
            <Row className="justify-content-md-center h-100">
                <div className="card-wrapper">
                    <div className="brand">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="card-fat">
                        <Card.Body>
                            <Card.Title as="h4">Sign in</Card.Title>
                            <Form
                                noValidate
                                validated={validated}
                                onSubmit={handleSubmit}
                            >
                                <Form.Group>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        required
                                        autoFocus
                                        type="email"
                                        value={email}
                                        disabled={loading}
                                        onChange={(e) =>
                                            setEmail(e.currentTarget.value)
                                        }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Mohon sertakan email yang valid!
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type="valid" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        required
                                        disabled={loading}
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.currentTarget.value)
                                        }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Mohon sertakan password yang valid!
                                    </Form.Control.Feedback>
                                    <Form.Control.Feedback type="valid" />
                                </Form.Group>
                                <Form.Group className="m-0">
                                    <ButtonLoading
                                        fill="Sign In"
                                        block
                                        password={password}
                                        loading={loading}
                                        type="submit"
                                    />
                                </Form.Group>
                                <div className="mt-4 text-center">
                                    don&apos;t have an account?{' '}
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

export default FormLogin
