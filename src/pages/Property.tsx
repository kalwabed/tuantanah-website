import React, { useEffect, useContext } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Spinner } from 'react-bootstrap'

import ListProperty from '../components/property/ListProperty'
import SearchBarProperty from '../components/property/SearchBarProperty'
import { fetchAllProperty } from '../utils/fetchAPI'
import { propertiesContext } from '../contexts/Properties'

const Property = () => {
	document.title = 'Property | tuantanah'
	window.scrollTo(0, 0)
	const { isLoading, setIsLoading, setProperties } = useContext(
		propertiesContext,
	)

	useEffect(() => {
		;(async () => {
			setIsLoading(true)
			setProperties(await fetchAllProperty())
			setIsLoading(false)
		})()
	}, [])

	return (
		<>
			<Header navlink='property' />
			<main>
				<Container>
					<SearchBarProperty />
					{isLoading && (
						<div className='text-center my-4 h5'>
							Tunggu sebentar <Spinner animation='grow' variant='success' />
						</div>
					)}
					{!isLoading && <ListProperty />}
				</Container>
			</main>
			<Footer />
		</>
	)
}

export default Property
