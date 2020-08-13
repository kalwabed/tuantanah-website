import React from 'react'
import { Form, Col, FormControl, Button, Badge } from 'react-bootstrap'
import { IoIosHeart } from 'react-icons/io'

import logo from '../logo.png'

const SearchBarProperty = () => {
    const searchOnSubmit = (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault()
    }

    return (
        <section className="section section-sm">
            <Form onSubmit={searchOnSubmit}>
                <Form.Row>
                    <Col xs={8} md={5}>
                        <FormControl
                            placeholder="i.e Banyuwangi"
                            type="text"
                            className="mr-sm-2"
                        />
                    </Col>
                    <Col xs={2} md={3} className="mb-2">
                        <Button type="submit" variant="success">
                            Search
                        </Button>
                    </Col>
                    <Col
                        md="auto"
                        className="d-sm-flex d-md-block justify-content-end"
                    >
                        <Button variant="outline-dark">
                            <Badge variant="light">0</Badge> <IoIosHeart />
                        </Button>
                        <Badge variant="outline-light" className="mx-1">
                            41 items
                        </Badge>
                        <Badge variant="outline-light" className="mx-1">
                            13 cities
                        </Badge>
                        <Badge variant="outline-light" className="mx-1">
                            <img src={logo} alt="logo" width="20" height="20" />
                        </Badge>
                    </Col>
                </Form.Row>
            </Form>
        </section>
    )
}

export default SearchBarProperty
