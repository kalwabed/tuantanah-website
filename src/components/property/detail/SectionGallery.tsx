/* eslint-disable react/prop-types */
import React from 'react'
import { Row, Container, Col, Card } from 'react-bootstrap'

import { Property } from '../../../types/index.types'

const SectionGalery: React.FC<Property> = ({ gallery }) => {
	return (
		<section className='section mt-2'>
			<Container>
				<Row>
					<Col as='h2'>
						Gallery <span className='divider'></span>
					</Col>
				</Row>
				<Row>
					{gallery.length < 1 && (
						<Col className='my-1' xs={12} md={3}>
							<Card>
								<h3 className='text-center'>Image is undefined</h3>
							</Card>
						</Col>
					)}
					{gallery.map((img, i) => (
						<Col className='my-1' xs={12} md={3} key={i}>
							<Card>
								<Card.Img
									src={img.imageUrl ? img.imageUrl : undefined}
									className='img-gallery'
									alt='img'
									width='100%'
									onClick={() =>
										window.open(
											img.imageUrl ? img.imageUrl : undefined,
											'_blank',
										)
									}
								/>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	)
}

export default SectionGalery
