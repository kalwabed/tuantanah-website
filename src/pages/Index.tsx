import React from 'react'
import { Container } from 'react-bootstrap'

import Header from '../components/Header'

const Index = () => {
    document.title = 'Home | Tuan Tanah'
    window.scrollTo(0, 0)
    return (
        <>
            <Header navlink="/" />
            <Container className="my-3">
                <h1>{import.meta.env.SNOWPACK_PUBLIC_TEST}</h1>
            </Container>
        </>
    )
}

export default Index
