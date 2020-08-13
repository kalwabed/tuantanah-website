import React from 'react'
import { FcKey, FcLandscape, FcManager } from 'react-icons/fc'
import { Row, Col, Button } from 'react-bootstrap'

import sample from '../hero.svg'
import type { refVisLer } from '../types/index.types'

const Hero = ({ refVisitorDealer }: refVisLer) => {
    const { SNOWPACK_PUBLIC_SITE_NAME } = import.meta.env
    const showVisLer = () => {
        window.scrollTo({
            top: refVisitorDealer.current.offsetTop + 30,
            behavior: 'smooth',
        })
    }

    return (
        <div className="my-3">
            <Row>
                <Col>
                    <p className="h2 font-weight-bold">
                        Wujudkan Properti Impian Anda Bersama{' '}
                        <span className="text-success logo-font">
                            {SNOWPACK_PUBLIC_SITE_NAME}
                        </span>
                    </p>
                    <p className="font-weight-light mb-4 text-wrap">
                        <span className="logo-font">
                            {SNOWPACK_PUBLIC_SITE_NAME}
                        </span>{' '}
                        adalah platform digital yang membantu anda mencari
                        properti impian anda dengan praktis tanpa prasyarat akun
                        atau yang lainnya.
                        <br />
                        Cari properti impian anda dan bangun bisnis anda
                        sekarang!
                    </p>
                    <div className="mb-4" style={{ marginTop: 30 }}>
                        <Button
                            className="shadow-lg pr-4"
                            size="lg"
                            variant="success"
                            onClick={showVisLer}
                        >
                            Show Me
                        </Button>
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
                    <img src={sample} width="580" height="350" alt="sample" />
                </Col>
            </Row>
        </div>
    )
}

export default Hero
