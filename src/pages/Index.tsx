import React, { createRef, useEffect } from 'react'
import { toast } from 'react-toastify'

import Header from '../components/Header'
import { Container } from 'react-bootstrap'
import Hero from '../components/Hero'
import SectionAdvantages from '../components/SectionAdvantages'
import SectionVisLer from '../components/SectionVisLer'
import SectionFaq from '../components/SectionFaq'
import Footer from '../components/Footer'
import BannerDevelopment from '../elements/BannerDevelopment'

const Index = (props: any) => {
    const refVisitorDealer = createRef<HTMLDivElement>()
    document.title = 'Home | tuantanah'
    window.scrollTo(0, 0)
    useEffect(() => {
        toast.dismiss()
    }, [props.history])
    return (
        <>
            <BannerDevelopment />
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
