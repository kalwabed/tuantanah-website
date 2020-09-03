import React, { useContext } from 'react'
import LazyLoad from 'react-lazyload'
import { Fade } from 'react-awesome-reveal'

import CardProperty from '../../parts/CardProperty'
import { Col, Spinner } from 'react-bootstrap'
import { propertiesContext } from '../../contexts/Properties'

const ListProperty = () => {
	const { properties } = useContext(propertiesContext)
	return (
		<>
			<Fade className='row' triggerOnce cascade>
				{properties.map((el, i) => (
					<Col md={3} key={i} xs={6} className='mb-3'>
						<LazyLoad
							once
							height={30}
							placeholder={<Spinner animation='border' />}
						>
							<CardProperty {...el} />
						</LazyLoad>
					</Col>
				))}
			</Fade>
		</>
	)
}

export default ListProperty
