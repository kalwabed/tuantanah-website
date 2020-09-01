import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'

import { Property } from '../../../types/index.types'
import LazyLoad from 'react-lazyload'

// eslint-disable-next-line react/prop-types
const SectionDescription: React.FC<Property> = ({ description }) => {
	return (
		<section className='section mt-3 mb-4'>
			<Container>
				<Row>
					<Col as='h2'>
						Description <span className='divider'></span>
					</Col>
				</Row>
				<Card className='h-100 w-100'>
					<LazyLoad once height={100} offset={50}>
						<Card.Body className='text-justify'>{description}</Card.Body>
					</LazyLoad>
				</Card>
			</Container>
		</section>
	)
}

export default SectionDescription
