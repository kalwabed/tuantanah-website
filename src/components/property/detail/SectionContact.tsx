import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import {
	AiOutlineWhatsApp,
	AiOutlineFacebook,
	AiOutlineMail,
	AiOutlinePhone,
	AiOutlineBank,
} from 'react-icons/ai'
import LazyLoad from 'react-lazyload'

const SectionContact = () => {
	return (
		<section className='section my-2'>
			<Container>
				<Row>
					<Col as='h2'>
						Contact <span className='divider'></span>
					</Col>
				</Row>
				<Card style={{ width: '100%', height: '120%' }}>
					<LazyLoad once height={50} offset={30}>
						<Card.Body>
							<Row className='mb-auto'>
								<Col as='h5' xs={12} md={4}>
									<AiOutlineWhatsApp size='1.2em' />
									<a href='#' className='newlink ml-1'>
										Abdul
									</a>
								</Col>
								<Col as='h5' xs={12} md={4}>
									<AiOutlineFacebook size='1.2em' />
									<a href='#' className='newlink ml-1'>
										Karim
									</a>
								</Col>
								<Col as='h5' xs={12} md={4}>
									<AiOutlineMail size='1.2em' />
									<a href='#' className='newlink ml-1'>
										Utsman
									</a>
								</Col>
							</Row>
							<div className='d-flex align-items-start flex-column mt-4'>
								<div className='mb-auto p-2'>
									<AiOutlineBank size='1.2em' /> Alamat: jln. Srigunting No.12,
									Dusun Krajan Genteng Kulon
								</div>
								<div className='p-2'>
									<AiOutlinePhone size='1.2em' /> Reservasi: 0333-98778
								</div>
							</div>
						</Card.Body>
					</LazyLoad>
				</Card>
			</Container>
		</section>
	)
}

export default SectionContact
