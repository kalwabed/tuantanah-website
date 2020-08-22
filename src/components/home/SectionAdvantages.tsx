import React from 'react'
import { IoIosRocket } from 'react-icons/io'
import { Row, Col, Container } from 'react-bootstrap'
import { FaTh, FaRegHandshake } from 'react-icons/fa'

const SectionAdvantages = () => {
    return (
        <section className="section section-lg">
            <Container>
                <Row className="text-center">
                    <Col md={4} sm={4}>
                        <IoIosRocket size="120" />
                        <h2 className="my-3">Cepat</h2>
                        <p className="lead ">
                            Tanpa harus mendaftar dulu dan mengisi ini dan itu,
                            anda bisa langsung mencari properti anda!
                        </p>
                    </Col>
                    <Col md={4} sm={4}>
                        <FaTh size="120" />
                        <h2 className="my-3">Kuantitas</h2>
                        <p className="lead ">
                            Menyediakan lebih dari 170 lahan/properti dari
                            berbagai wilayah di Indonesia dan bekerja sama
                            dengan lebih dari 15 perusahaan swasta
                        </p>
                    </Col>
                    <Col md={4} sm={4}>
                        <FaRegHandshake size="120" />
                        <h2 className="my-3">Terpercaya</h2>
                        <p className="lead ">
                            <span className="logo-font">tuantanah</span> telah
                            membantu lebih dari 73 transaksi properti di seluruh
                            Indonesia
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SectionAdvantages
