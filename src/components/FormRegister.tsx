/* eslint-disable react/prop-types */
import React from 'react'
import { Container, Row, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import logo from '../img/logo.png'
import { TRegisterProps } from '../types/index.types'
import ButtonLoading from '../elements/ButtonLoading'

const FormRegister: React.FC<TRegisterProps> = ({
    loading,
    fullName,
    setEmail,
    setFullName,
    setPassword,
    setCheck,
    setRepeatPassword,
    repeatPassword,
    validated,
    handleSubmit,
    email,
    password,
    check,
}) => {
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
                                <Form
                                    noValidate
                                    validated={validated}
                                    onSubmit={handleSubmit}
                                >
                                    <Form.Group>
                                        <Form.Label>Fullname</Form.Label>
                                        <Form.Control
                                            required
                                            disabled={loading}
                                            type="text"
                                            placeholder="i.e John Bejo"
                                            onChange={(e) =>
                                                setFullName(
                                                    e.currentTarget.value
                                                )
                                            }
                                            value={fullName}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            Mohon sertakan nama yang valid!
                                        </Form.Control.Feedback>
                                        <Form.Control.Feedback type="valid" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control
                                            required
                                            disabled={loading}
                                            type="email"
                                            placeholder="i.e example@do.it"
                                            value={email}
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
                                            required
                                            disabled={loading}
                                            type="password"
                                            placeholder="min. 5 chars"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(
                                                    e.currentTarget.value
                                                )
                                            }
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            Mohon sertakan password yang valid!
                                        </Form.Control.Feedback>
                                        <Form.Control.Feedback type="valid" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Repeat Password</Form.Label>
                                        <Form.Control
                                            required
                                            disabled={loading}
                                            type="password"
                                            placeholder="repeat your password"
                                            value={repeatPassword}
                                            onChange={(e) =>
                                                setRepeatPassword(
                                                    e.currentTarget.value
                                                )
                                            }
                                        />

                                        <Form.Control.Feedback type="valid" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Check
                                            custom
                                            required
                                            onClick={() => setCheck(!check)}
                                            checked={check}
                                            id="checkbox"
                                            type="checkbox"
                                            label="Agree with our Terms and Conditions"
                                        />
                                        <Form.Control.Feedback type="invalid" />
                                    </Form.Group>

                                    <Form.Group className="m-0">
                                        <ButtonLoading
                                            loading={loading}
                                            block
                                            fill="Sign Up"
                                            password={repeatPassword}
                                            type="submit"
                                        />
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

export default FormRegister
