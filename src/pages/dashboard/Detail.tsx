import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

import gambar from '../../img/gambarprop.jpg'
import Header from '../../components/dashboard/Header'
import Gallery from '../../components/dashboard/Detail/Gallery'
import Identity from '../../components/dashboard/Detail/Identity'

const Detail = () => {
	// const id = document.location.pathname.split('/')[3]
	return (
		<>
			<Header />
			<Container className='mt-3'>
				<Row>
					<Col>
						<Card>
							<Card.Img
								className='img-gallery'
								variant='top'
								src={gambar}
								height={400}
							/>
						</Card>
					</Col>
				</Row>

				<Gallery />

				<Identity />
			</Container>
		</>
	)
}

export default Detail
