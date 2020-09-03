import React, { useContext } from 'react'
import LazyLoad from 'react-lazyload'
import { Fade } from 'react-awesome-reveal'

import CardProperty from '../../parts/CardProperty'
import { Spinner, Row } from 'react-bootstrap'
import { propertiesContext } from '../../contexts/Properties'

const ListProperty = () => {
	const { properties } = useContext(propertiesContext)
	return (
		<>
			<Row>
				<Fade className='col-6 col-md-3 mb-3' triggerOnce cascade>
					{properties.map((el, i) => (
						<LazyLoad
							once
							height={30}
							key={i}
							placeholder={<Spinner animation='border' />}
						>
							<CardProperty {...el} />
						</LazyLoad>
					))}
				</Fade>
			</Row>
		</>
	)
}

export default ListProperty
