import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'

import gambarprop from '../gambarprop.jpg'
import StatusPropertyCheck from '../elements/StatusPropertyCheck'
import { Link } from 'react-router-dom'
import { IoIosHeartEmpty } from 'react-icons/io'

const CardProperty = () => {
    return (
        <Col md={3} xs={6} className="mb-3">
            <Card>
                <Card.Img variant="top" src={gambarprop} width="10%" />
                <Card.Body className="pt-2 font-card">
                    <div className="d-md-flex justify-content-between">
                        <Card.Title>30x50</Card.Title>
                        <div>
                            <StatusPropertyCheck />
                        </div>
                    </div>
                    <Card.Text className="font-weight-bold">
                        Tanah kita
                    </Card.Text>
                    <Card.Text className="mt-2 font-small">
                        Genteng, Banyuwangi
                    </Card.Text>
                    <div className="justify-content-between d-flex">
                        <Link to="##">
                            <Button size="sm" variant="success">
                                Detail
                            </Button>
                        </Link>
                        <Button
                            className="ml-1"
                            variant="outline-dark"
                            size="sm"
                        >
                            <IoIosHeartEmpty />
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CardProperty
