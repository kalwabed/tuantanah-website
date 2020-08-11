import React, { createRef } from 'react'

import Header from '../components/Header'
import { Container } from 'react-bootstrap'
import Hero from '../components/Hero'
import SectionAdvantages from '../components/SectionAdvantages'
import SectionVisLer from '../components/SectionVisLer'

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
                    <hr className="my-3" />
                    <SectionAdvantages />
                </Container>
                <SectionVisLer refVisitorDealer={refVisitorDealer} />
            </main>
        </>
    )
}

export default Index
