import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

import gambar from '../../../img/gambarprop.jpg'

const Gallery = () => {
	return (
		<section>
			<Row>
				<Col xs={12} md={3} className='my-1'>
					<Card>
						<Card.Img className='img-gallery' src={gambar} alt='gambar' />
					</Card>
				</Col>
				<Col xs={12} md={3} className='my-1'>
					<Card>
						<Card.Img className='img-gallery' src={gambar} alt='gambar' />
					</Card>
				</Col>
				<Col xs={12} md={3} className='my-1'>
					<Card>
						<Card.Img className='img-gallery' src={gambar} alt='gambar' />
					</Card>
				</Col>
				<Col xs={12} md={3} className='my-1'>
					<Card>
						<Card.Img className='img-gallery' src={gambar} alt='gambar' />
					</Card>
				</Col>
			</Row>
		</section>
	)
}

export default Gallery
