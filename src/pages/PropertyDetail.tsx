import React from 'react'
import SectionAbout from '../components/property/detail/SectionAbout'
import Header from '../components/Header'
import SectionGalery from '../components/property/detail/SectionGallery'
import SectionDescription from '../components/property/detail/SectionDescription'
import Footer from '../components/Footer'
import SectionContact from '../components/property/detail/SectionContact'

const PropertyDetail = () => {
    document.title = 'Perumahan Padang Pasir Regency | tuantanah'
    window.scrollTo(0, 0)

    return (
        <>
            <Header navlink="" />
            <SectionAbout />
            <SectionGalery />
            <SectionDescription />
            <SectionContact />
            <Footer />
        </>
    )
}

export default PropertyDetail
