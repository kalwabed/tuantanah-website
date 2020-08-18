import React from 'react'
import { Row, Col } from 'react-bootstrap'

import gambar from '../img/section1.svg'
import gambar2 from '../img/section2.svg'
import gambar3 from '../img/section3.svg'
import { FaLongArrowAltRight } from 'react-icons/fa'

const SectionAdvantages = () => {
    return (
        <section className="mb-3">
            <Row>
                <Col className="text-center mb-2" md={4} sm={3}>
                    <span className="h3 font-weight-bold my-1 mx-auto">
                        Pilih
                    </span>
                    <Row className="mt-2">
                        <Col>
                            <img
                                src={gambar}
                                alt="gambar"
                                height="220"
                                width="220"
                            />
                        </Col>
                        <span className="d-md-block d-none h2">
                            <FaLongArrowAltRight />
                        </span>
                    </Row>
                    Cari properti pilihan anda
                </Col>

                <Col className="text-center" md={4} sm={3}>
                    <span className="h3 font-weight-bold my-1 mx-auto">
                        Verifikasi
                    </span>
                    <Row className="mt-2">
                        <Col>
                            <img
                                src={gambar2}
                                alt="gambar"
                                height="220"
                                width="220"
                            />
                        </Col>
                        <span className="d-none d-md-block h2">
                            <FaLongArrowAltRight />
                        </span>
                    </Row>
                    Verifikasi berkas/dokumen properti
                </Col>

                <Col className="text-center" md={4} sm={3}>
                    <span className="h3 font-weight-bold my-1 mx-auto">
                        Sepakat
                    </span>
                    <Row className="mt-2">
                        <Col>
                            <img
                                src={gambar3}
                                alt="gambar"
                                height="220"
                                width="220"
                            />
                        </Col>
                    </Row>
                    Yeay! Properti itu jadi milik anda
                </Col>
            </Row>
        </section>
    )
}

export default SectionAdvantages
