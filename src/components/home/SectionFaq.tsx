import React from 'react'
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import gambar from '../../img/section6.svg'
import LazyLoad from 'react-lazyload'

const SectionFaq = () => {
	return (
		<section className='section section-lg bg-dark text-light'>
			<Container>
				<Row>
					<Col md={12} sm={12} className='text-center'>
						<p className='h2 my-3 font-weight-bold'>FAQ</p>
						<LazyLoad
							once
							height={100}
							offset={100}
							placeholder={<Spinner animation='border' />}
						>
							<img src={gambar} alt='gambar' width='300' height='300' />
						</LazyLoad>
						<p className='mb-3 font-weight-light h5'>
							Masih ragu atau bingung? kami telah mengampu pertanyaan-pertanyaan
							yang sering muncul dan mungkin bisa membantu anda
						</p>
						<Link to='#'>
							<Button size='sm' variant='success'>
								Questions
							</Button>
						</Link>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default SectionFaq
