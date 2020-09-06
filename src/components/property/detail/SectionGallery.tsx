/* eslint-disable react/prop-types */
import React from 'react'
import { Row, Container, Col, Card, Spinner } from 'react-bootstrap'

import { Property } from '../../../types/index.types'
import LazyLoad from 'react-lazyload'
import { Fade } from 'react-awesome-reveal'

const SectionGalery: React.FC<Property> = ({ gallery }) => {
	if (!gallery) return null
	return (
		<section className='section mt-2'>
			<Container>
				<Row>
					<Col as='h2'>
						Gallery <span className='divider'></span>
					</Col>
				</Row>

				{gallery.length < 1 && (
					<Col className='my-1' xs={12} md={3}>
						<Card>
							<h4 className='text-center'>Image is unavailable</h4>
						</Card>
					</Col>
				)}

				<Row>
					<Fade
						className='col-12 col-md-3 my-1'
						direction='right'
						triggerOnce
						cascade
					>
						{gallery.map((img, i) => (
							<LazyLoad
								once
								key={i}
								height={50}
								placeholder={<Spinner animation='border' />}
							>
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
							</LazyLoad>
						))}
					</Fade>
				</Row>
			</Container>
		</section>
	)
}

export default SectionGalery
