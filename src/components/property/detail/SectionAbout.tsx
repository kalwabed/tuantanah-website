import React from 'react'
import { Row, Col, Container, Card, Badge } from 'react-bootstrap'

import gambar from '../../../img/gambarprop.jpg'
import StatusPropertyCheck from '../../../elements/StatusPropertyCheck'

const SectionAbout = () => {
    return (
        <section className="section">
            <Container>
                <Row>
                    <Col>
                        <h1 className="mt-2">Perumahan Padang Pasir Regency</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={10} sm={12} md={7}>
                        <Card>
                            <Card.Img src={gambar} alt="gambar" width="100%" />
                        </Card>
                    </Col>
                    <Col className="text-wrap" md={5}>
                        <Card bg="light" border="light">
                            <Card.Body>
                                <h6 className="h5">
                                    Marketing Padang Pasir Regency
                                </h6>
                                <p>Genteng, Banyuwangi</p>
                                <h2>
                                    30x50{' '}
                                    <span className="font-weight-light">
                                        hektare
                                    </span>
                                </h2>
                                {/* <Badge>CICILAN</Badge> */}
                                {/*jika pakai konsep cicilan maka akifkan badge diatas  */}
                                <h2>
                                    <span className="font-weight-light">
                                        Rp.
                                    </span>{' '}
                                    100 Juta
                                </h2>
                                <p>
                                    <StatusPropertyCheck />
                                </p>
                                <hr />
                                <ul>
                                    <li>Model: perumahan</li>
                                    <li>Stok: 18 unit</li>
                                    <li>DP: 3,5 Juta / 3thn </li>
                                    <li>Cicilan: 15 ribu / hari</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SectionAbout
