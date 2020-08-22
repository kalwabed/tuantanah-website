import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import gambar from '../img/logo.png'
import { Link } from 'react-router-dom'
import { IoLogoGithub, IoLogoInstagram, IoIosHeart } from 'react-icons/io'

const Footer = () => {
    return (
        <footer className="footer position-relative bg-dark text-light">
            <Container>
                <Row>
                    <Col md={4}>
                        <p className="text-justify">
                            <span className="logo-font">tuantanah</span> adalah
                            lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Mollitia cupiditate iste voluptatum voluptas
                            dolores quod mollitia obcaecati.
                        </p>
                        <p className="m-0 font-weight-normal">Follow us</p>
                        <div className="d-flex justify-content-start">
                            <div className="mr-1">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-light"
                                    href="https://instagram.com/kaliwa__"
                                >
                                    <IoLogoInstagram size="1.5em" />
                                </a>
                            </div>
                            <div className="mr-1">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-light"
                                    href="https://github.com/kaliwa"
                                >
                                    <IoLogoGithub size="1.3em" />
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col></Col>
                    <Col md={4} sm={4} className="d-none d-md-block">
                        <p className="font-weight-bold ">Pages</p>
                        <ul className="link-footer p-0 mb-0">
                            <li>
                                <Link
                                    to=""
                                    className="text-decoration-none text-light"
                                >
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to=""
                                    className="text-decoration-none text-light"
                                >
                                    Contact us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to=""
                                    className="text-decoration-none text-light"
                                >
                                    Faq
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <hr className="my-5" />
                <Row>
                    <Col>
                        <div className="d-flex justify-content-center">
                            <img src={gambar} alt="gambar" height="25" />
                        </div>
                        <div className="mt-2 d-flex justify-content-center align-items-center">
                            <p className="font-weight-light font-small">
                                Copyright ©{' '}
                                <span className="logo-font">tuantanah</span>{' '}
                                {new Date().getFullYear()}. All rights reserved
                            </p>
                        </div>
                        <div className="d-flex justify-content-center font-small">
                            Build with <IoIosHeart size="1.5em" />{' '}
                            {/* <DiReact size="1.7em" className="react-logo" /> */}
                            <p className="mx-1">Hosted on</p>
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                role="img"
                                aria-label="Vercel Inc."
                                height="15"
                                viewBox="0 0 283 64"
                                className="mx-1"
                            >
                                <path d="M37 0l37 64H0L37 0zM159.6 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7h28.3c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM267.3 34c0-10.3-7.6-17.5-18.5-17.5s-18.5 7.2-18.5 17.5c0 10.1 8.2 17.5 19.5 17.5 6.2 0 11.8-2.3 15.4-6.5l-6.8-3.9c-2.1 2.1-5.2 3.4-8.6 3.4-5 0-9.3-2.7-10.8-6.8l-.3-.7H267c.2-1 .3-2 .3-3zm-28.7-3l.2-.6c1.3-4.3 5.1-6.9 9.9-6.9 4.9 0 8.6 2.6 9.9 6.9l.2.6h-20.2zM219.3 28.3l6.8-3.9c-3.2-5-8.9-7.8-15.8-7.8-10.9 0-18.5 7.2-18.5 17.5s7.6 17.5 18.5 17.5c6.9 0 12.6-2.8 15.8-7.8l-6.8-3.9c-1.8 3-5 4.7-9 4.7-6.3 0-10.5-4.2-10.5-10.5s4.2-10.5 10.5-10.5c3.9 0 7.2 1.7 9 4.7zM282.3 5.6h-8v45h8v-45zM128.5 5.6h-9.2L101.7 36 84.1 5.6h-9.3L101.7 52l26.8-46.4zM185.1 25.8c.9 0 1.8.1 2.7.3v-8.5c-6.8.2-13.2 4-13.2 8.7v-8.7h-8v33h8V36.3c0-6.2 4.3-10.5 10.5-10.5z"></path>
                            </svg>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
