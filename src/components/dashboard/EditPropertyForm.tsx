import React from 'react'
import { Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Inputs } from '../../types/index.types'

interface newInputs extends Inputs {
	galleryImg1: string
	galleryImg2: string
	galleryImg3: string
	galleryImg4: string
}

const IdentityCard = () => {
	const { register } = useForm<newInputs>()

	return (
		<Container fluid>
			<Form>
				<Row>
					<Card as={Col} className='mr-2'>
						<Card.Body>
							<h1>gambar</h1>
						</Card.Body>
					</Card>

					<Card as={Col}>
						<Card.Body>
							<Form.Row>
								<Form.Group as={Col}>
									<Form.Label htmlFor='fullName'>
										Nama Lengkap / Perusahaan
									</Form.Label>
									<Form.Control
										defaultValue='Kalwabed'
										id='fullName'
										readOnly
										name='fullName'
										ref={register}
									/>
								</Form.Group>

								<Form.Group as={Col}>
									<Form.Label htmlFor='title'>Judul</Form.Label>
									<Form.Control
										defaultValue='Kaliwa Foundation'
										id='title'
										name='title'
										ref={register}
									/>
								</Form.Group>
							</Form.Row>
						</Card.Body>
					</Card>
				</Row>
			</Form>
		</Container>
	)
}

export default IdentityCard
