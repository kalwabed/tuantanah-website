import React from 'react'
import { Row, Container, Col, Card } from 'react-bootstrap'

import gambar from '../../../img/gambarprop.jpg'

const SectionGalery = () => {
    return (
        <section className="section mt-2">
            <Container>
                <Row>
                    <Col as="h2">
                        Gallery <span className="divider"></span>
                    </Col>
                </Row>
                <Row>
                    <Col className="my-1" xs={12} md={3}>
                        <Card>
                            <Card.Img src={gambar} alt="gambar" width="100%" />
                        </Card>
                    </Col>
                    <Col className="my-1" xs={12} md={3}>
                        <Card>
                            <Card.Img src={gambar} alt="gambar" width="100%" />
                        </Card>
                    </Col>
                    <Col className="my-1" xs={12} md={3}>
                        <Card>
                            <Card.Img src={gambar} alt="gambar" width="100%" />
                        </Card>
                    </Col>
                    <Col className="my-1" xs={12} md={3}>
                        <Card>
                            <Card.Img src={gambar} alt="gambar" width="100%" />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SectionGalery
