/* eslint-disable react/prop-types */
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Card, Col, Row, Spinner } from 'react-bootstrap'
import LazyLoad from 'react-lazyload'

import { Property } from '../../../types/index.types'

const Gallery: React.FC<Property> = ({ gallery }) => {
	if (!gallery) return null
	return (
		<section className='mt-2'>
			<Row>
				{gallery.length < 1 ? (
					<Col>
						<Card className='shadow-sm'>
							<Card.Body className='text-center text-muted'>
								<h6>Galeri belum ditambahkan</h6>
							</Card.Body>
						</Card>
					</Col>
				) : (
					<Fade
						className='col-12 col-md-3 my-1'
						direction='up'
						triggerOnce
						cascade
					>
						{gallery.map((gallery, i) => (
							<LazyLoad
								once
								key={i}
								height={50}
								placeholder={<Spinner animation='border' />}
							>
								<Card>
									<Card.Img
										className='img-gallery'
										src={gallery.imageUrl}
										alt='gambar'
									/>
								</Card>
							</LazyLoad>
						))}
					</Fade>
				)}
			</Row>
		</section>
	)
}

export default Gallery
