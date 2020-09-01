import React, { useContext } from 'react'
import LazyLoad from 'react-lazyload'

import CardProperty from '../../parts/CardProperty'
import { Row, Col } from 'react-bootstrap'
import { propertiesContext } from '../../contexts/Properties'

const ListProperty = () => {
	const { properties } = useContext(propertiesContext)
	return (
		<>
			<Row>
				{properties.map((el, i) => (
					<Col md={3} key={i} xs={6} className='mb-3'>
						<LazyLoad height={30} once>
							<CardProperty {...el} />
						</LazyLoad>
					</Col>
				))}
			</Row>
		</>
	)
}

export default ListProperty
