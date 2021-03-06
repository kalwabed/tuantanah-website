import React from 'react'
import { Card, Row, Col, Container, Button, Spinner } from 'react-bootstrap'
import { Fade } from 'react-awesome-reveal'
import { IoIosArrowDropright, IoMdLogIn } from 'react-icons/io'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'

import gambar1 from '../../img/section4.svg'
import gambar2 from '../../img/section5.svg'
import type { refVisLer } from '../../types/index.types'

const SectionVisLer = ({ refVisitorDealer }: refVisLer) => {
	return (
		<section className='section section-lg bg-dark text-white' ref={refVisitorDealer}>
			<Container>
				<Row className='text-center mb-5'>
					<Col lg={10} xl={12}>
						<h2 className='h1 font-weight-light mb-4'>
							Apa yang bisa anda lakukan bersama <span className='logo-font'>tuantanah</span>?
						</h2>
						<p className='lead'>
							Jika anda sedang mencari properti yang cocok dengan kebutuhan anda ataupun anda yang ingin mengiklankan properti anda dengan
							mudah dan gratis maka <span className='logo-font'>tuantanah</span> adalah tempatnya
						</p>
					</Col>
				</Row>
				<Row>
					<Col className='text-center mb-3' lg={6} md={6} sm={6}>
						<Card bg='secondary' text='light'>
							<Card.Body className='p-5'>
								<h3 className='h2 font-weight-bold'>Visitor</h3>
								<LazyLoad offset={80} once placeholder={<Spinner animation='border' />} height={150}>
									<Fade direction='up'>
										<img src={gambar1} alt='visitor illustration' width='210' height='210' />
									</Fade>
								</LazyLoad>
								<div className='text-justify'>
									<p className='mt-2'>Sedang mencari properti? Temukan properti yang sesuai dengan anda.</p>
									<Link to='/property'>
										<Button variant='success' size='sm'>
											Menuju Properti <IoIosArrowDropright />
										</Button>
									</Link>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col className='text-center' md={6} sm={6} lg={6}>
						<Card bg='secondary' text='light'>
							<Card.Body className='p-5'>
								<h3 className='h2 font-weight-bold'>Dealer</h3>
								<LazyLoad offset={80} once placeholder={<Spinner animation='border' />} height={150}>
									<Fade direction='up'>
										<img src={gambar2} alt='dealer illustration' width='210' height='210' />
									</Fade>
								</LazyLoad>
								<div className='text-justify'>
									<p className='mt-2'>
										Mau ikut pasang iklan properti anda di <span className='text-success logo-font'>tuantanah</span>? Silahkan daftar dan
										ikuti arahan selanjutnya.
									</p>
									<Link to='/signin'>
										<Button size='sm' variant='success'>
											Masuk <IoMdLogIn />
										</Button>
									</Link>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default SectionVisLer
