import React from 'react'
import { Form, Col, FormControl, Button } from 'react-bootstrap'

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
                    <Col xs={2} md={3}>
                        <Button type="submit" variant="success">
                            Search
                        </Button>
                    </Col>
                    <Col md="auto" className="d-none d-md-block">
                        Lorem ipsum dolor, sit amet consectetur
                    </Col>
                </Form.Row>
            </Form>
        </section>
    )
}

export default SearchBarProperty
