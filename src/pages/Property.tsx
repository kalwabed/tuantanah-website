import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from 'react-bootstrap'
import ListProperty from '../components/ListProperty'
import SearchBarProperty from '../components/SearchBarProperty'

const Property = () => {
    document.title = `Property | tuantanah`
    window.scrollTo(0, 0)

    return (
        <>
            <Header navlink="property" />
            <main>
                <Container>
                    <SearchBarProperty />
                    <ListProperty />
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default Property
