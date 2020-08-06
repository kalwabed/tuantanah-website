import React from 'react'
import Header from '../components/Header'

const Property = () => {
    document.title = 'Property | Tuan Tanah'
    window.scrollTo(0, 0)

    return (
        <>
            <Header navlink="property" />
        </>
    )
}

export default Property
