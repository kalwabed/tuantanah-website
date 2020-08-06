import React from 'react'
import { FcKey, FcLandscape, FcManager } from 'react-icons/fc'
import { Container, Row, Col, Button } from 'react-bootstrap'

import sample from '../sample.svg'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Index = () => {
    document.title = 'Home | Tuan Tanah'
    window.scrollTo(0, 0)
    return (
        <>
            <Header navlink="/" />
            <Container className="">
                <div className="my-3">
                    <Row>
                        <Col>
                            <p className="h1 font-weight-bold">
                                Wujudkan Properti Impian Anda Bersama{' '}
                                <span className="text-success">TuanTanah</span>
                            </p>
                            <p className="font-weight-light mb-4 text-wrap">
                                TuanTanah adalah platform digital yang membantu
                                anda mencari properti impian anda dengan praktis
                                tanpa prasyarat akun atau yang lainnya.
                                <br />
                                Cari properti impian anda dan bangun bisnis anda
                                sekarang!
                            </p>
                            <div className="mb-4" style={{ marginTop: 30 }}>
                                <Link to="/property">
                                    <Button
                                        className="shadow-lg pr-4"
                                        size="lg"
                                    >
                                        Get Started
                                    </Button>
                                </Link>
                            </div>

                            <Row className="mt-4">
                                <Col>
                                    <FcManager className="h3 mr-2" />
                                    <h6 className="mt-3">
                                        79+{' '}
                                        <span className="text-muted font-weight-light">
                                            dealers
                                        </span>
                                    </h6>
                                </Col>
                                <Col>
                                    <FcKey className="h3 mr-2" />
                                    <h6 className="mt-3">
                                        163+{' '}
                                        <span className="text-muted font-weight-light">
                                            lands
                                        </span>
                                    </h6>
                                </Col>
                                <Col>
                                    <FcLandscape className="h3 mr-2" />
                                    <h6 className="mt-3">
                                        58+{' '}
                                        <span className="text-muted font-weight-light">
                                            cities
                                        </span>
                                    </h6>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="d-none d-md-block">
                            <img
                                src={sample}
                                width="580"
                                height="350"
                                alt="sample"
                            />
                        </Col>
                    </Row>
                    <hr />
                </div>
            </Container>
        </>
    )
}

export default Index
