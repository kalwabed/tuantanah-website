import React, { useContext } from 'react'
import CardProperty from '../../parts/CardProperty'
import { Row } from 'react-bootstrap'
import { propertiesContext } from '../../contexts/Properties'

const ListProperty = () => {
	const { properties } = useContext(propertiesContext)
	return (
		<>
			<Row>
				{properties.map((el, i) => (
					<CardProperty key={i} {...el} />
				))}
			</Row>
		</>
	)
}

export default ListProperty
