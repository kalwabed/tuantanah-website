/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap'

import StatusPropertyCheck from '../../../elements/StatusPropertyCheck'
import { propertiesContext } from '../../../contexts/Properties'

const SectionAbout = () => {
	const { showProperties } = useContext(propertiesContext)

	return (
		<section className='section'>
			<Container>
				<Row>
					<Col xs={12} md={7} className='mt-4'>
						<Card>
							<Card.Img
								src={showProperties.mainPicture}
								alt='gambar'
								width='100%'
								onClick={() =>
									window.open(
										showProperties.mainPicture,
										'_blank',
									)
								}
								className='img-gallery'
							/>
						</Card>
					</Col>
					<Col className='text-wrap' xs={12} md={5}>
						<Card bg='light' border='light'>
							<Card.Body>
								<div className='border-bottom'>
									<h5 className='h4'>
										{showProperties.title}
									</h5>
									<p className='h6'>
										Marketing Padang Pasir Regency
									</p>
									<p>{showProperties.location}</p>
								</div>
								<h2>
									{showProperties.size}{' '}
									<span className='font-weight-light'>
										hektare
									</span>
								</h2>
								{/* <Badge>CICILAN</Badge> */}
								{/*jika pakai konsep cicilan maka akifkan badge diatas  */}
								<h2>
									<span className='font-weight-light'>
										Rp.
									</span>{' '}
									{showProperties.price} Juta
								</h2>
								<p>
									<StatusPropertyCheck
										shm={showProperties.status.shm}
										nego={showProperties.status.negotiation}
									/>
								</p>
								<hr />
								<ul>
									<li>Model: perumahan</li>
									<li>Stok: 18 unit</li>
									<li>DP: 3,5 Juta / 3thn</li>
									<li>Cicilan: 15 ribu / hari</li>
								</ul>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default SectionAbout
