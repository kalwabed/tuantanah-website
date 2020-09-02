import React, { useContext } from 'react'

import SectionAbout from '../components/property/detail/SectionAbout'
import Header from '../components/Header'
import SectionGalery from '../components/property/detail/SectionGallery'
import SectionDescription from '../components/property/detail/SectionDescription'
import Footer from '../components/Footer'
import SectionContact from '../components/property/detail/SectionContact'
import { propertiesContext } from '../contexts/Properties'

const PropertyDetail = () => {
	const { isLoading, showProperties } = useContext(propertiesContext)
	document.title = `${showProperties.title} | tuantanah`
	window.scrollTo(0, 0)

	return (
		<>
			<Header navlink='' />
			{!isLoading && (
				<>
					<SectionAbout {...showProperties} />
					<SectionGalery {...showProperties} />
					<SectionDescription {...showProperties} />
					<SectionContact />
				</>
			)}
			<Footer />
		</>
	)
}

export default PropertyDetail
