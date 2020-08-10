import React from 'react'

import Header from '../components/Header'
import { Container } from 'react-bootstrap'
import Hero from '../components/Hero'
import SectionAdvantages from '../components/SectionAdvantages'

const Index = () => {
    const { SNOWPACK_PUBLIC_SITE_NAME } = import.meta.env
    document.title = `Home | ${SNOWPACK_PUBLIC_SITE_NAME}`
    window.scrollTo(0, 0)
    return (
        <>
            <Header navlink="/" />
            <Container className="">
                <Hero />
                <hr className="my-3" />
                <SectionAdvantages />
            </Container>
        </>
    )
}

export default Index
