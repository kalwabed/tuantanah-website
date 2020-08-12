import React, { createRef } from 'react'

import Header from '../components/Header'
import { Container } from 'react-bootstrap'
import Hero from '../components/Hero'
import SectionAdvantages from '../components/SectionAdvantages'
import SectionVisLer from '../components/SectionVisLer'
import SectionFaq from '../components/SectionFaq'
import Footer from '../components/Footer'

const Index = () => {
    const { SNOWPACK_PUBLIC_SITE_NAME } = import.meta.env
    const refVisitorDealer = createRef()
    document.title = `Home | ${SNOWPACK_PUBLIC_SITE_NAME}`
    window.scrollTo(0, 0)
    return (
        <>
            <Header navlink="/" />
            <main>
                <Container>
                    <Hero refVisitorDealer={refVisitorDealer} />
                    <div className="my-3" />
                </Container>
                <SectionAdvantages />
                <SectionVisLer refVisitorDealer={refVisitorDealer} />
                <SectionFaq />
            </main>
            <Footer />
        </>
    )
}

export default Index
