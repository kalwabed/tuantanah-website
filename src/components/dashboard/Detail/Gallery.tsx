/* eslint-disable react/prop-types */
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

import { Property } from '../../../types/index.types'

const Gallery: React.FC<Property> = ({ gallery }) => {
	if (!gallery) return null
	return (
		<section className='mt-2'>
			<Row>
				{gallery.length < 1 && (
					<Col>
						<Card className='shadow-sm'>
							<Card.Body className='text-center'>
								<h6>Galeri belum ditambahkan</h6>
							</Card.Body>
						</Card>
					</Col>
				)}
				{gallery.map((gallery, i) => (
					<Col xs={12} md={3} className='my-1' key={i}>
						<Card>
							<Card.Img
								className='img-gallery'
								src={gallery.imageUrl}
								alt='gambar'
							/>
						</Card>
					</Col>
				))}
			</Row>
		</section>
	)
}

export default Gallery
