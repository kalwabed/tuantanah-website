/* eslint-disable react/prop-types */
import React from 'react'
import {
	Button,
	Card,
	Col,
	Container,
	Form,
	InputGroup,
	Row,
} from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Quill from 'react-quill'
import { apiProvinsi, Inputs, Property } from '../../types/index.types'

interface newInputs extends Inputs {
	galleryImg1: string
	galleryImg2: string
	galleryImg3: string
	galleryImg4: string
}

const EditPropertyForm = ({
	prop,
	dataProvinsi,
}: {
	prop: Property
	dataProvinsi: apiProvinsi
}) => {
	const { register, watch } = useForm<newInputs>()
	console.log(dataProvinsi)
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
							{/* nama & judul */}
							<Form.Row>
								{/* nama */}
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
								{/* judul */}
								<Form.Group as={Col}>
									<Form.Label htmlFor='title'>Judul</Form.Label>
									<Form.Control
										defaultValue={prop.title}
										id='title'
										name='title'
										ref={register}
									/>
								</Form.Group>
							</Form.Row>

							{/* lokasi */}
							<Form.Row>
								{/* kabupaten */}
								<Form.Group as={Col}>
									<Form.Label htmlFor='provinsi'>Provinsi</Form.Label>
									<Form.Control
										id='provinsi'
										name='provinsi'
										ref={register}
										custom
										as='select'
									>
										<option value='' disabled>
											-- Provinsi --
										</option>
										<option value='Jawa barat'>Jawa barat</option>
									</Form.Control>
								</Form.Group>
								{/* kota */}
								<Form.Group as={Col}>
									<Form.Label htmlFor='kota'>Kota/Kabupaten</Form.Label>
									<Form.Control
										id='kota'
										name='kota'
										ref={register}
										custom
										as='select'
									>
										<option value='' disabled>
											-- Kota/Kabupaten --
										</option>
										<option value='Bandung'>Bandung</option>
									</Form.Control>
								</Form.Group>
							</Form.Row>

							{/* panjang & lebar */}
							<Form.Row>
								{/* panjang */}
								<Form.Group as={Col}>
									<Form.Label htmlFor='panjang'>Panjang</Form.Label>
									<Form.Control
										id='panjang'
										name='panjang'
										ref={register}
										placeholder='contoh: 10'
									/>
								</Form.Group>
								{/* lebar */}
								<Form.Group as={Col}>
									<Form.Label htmlFor='lebar'>Lebar</Form.Label>
									<Form.Control
										id='lebar'
										name='lebar'
										ref={register}
										placeholder='contoh: 1,5'
									/>
								</Form.Group>
							</Form.Row>

							{/* ceklis pakai luas */}
							<Form.Row>
								<Form.Group as={Col}>
									<Form.Check
										id='isLuas'
										name='isLuas'
										defaultChecked={false}
										ref={register}
										custom
										label='Pakai ukuran luas'
									/>
								</Form.Group>
							</Form.Row>

							{/* luas */}
							<Form.Row>
								<Form.Group as={Col}>
									<Form.Label htmlFor='luas'>Luas</Form.Label>
									<InputGroup>
										<Form.Control
											id='luas'
											name='luas'
											ref={register}
											placeholder='contoh: 4'
										/>
										<InputGroup.Append>
											<InputGroup.Text>Hektar</InputGroup.Text>
										</InputGroup.Append>
									</InputGroup>
								</Form.Group>
							</Form.Row>

							{/* harga dan ceklis negosiasi */}
							<Form.Row>
								<Form.Group as={Col}>
									<Form.Label htmlFor='harga'>Harga</Form.Label>
									<InputGroup>
										<Form.Control
											id='harga'
											name='harga'
											ref={register}
											placeholder='contoh: 10'
										/>
										<InputGroup.Append>
											<InputGroup.Text>
												<Form.Check
													custom
													name='nego'
													id='nego'
													label='Negosiasi ?'
													type='checkbox'
													ref={register}
												/>
											</InputGroup.Text>
										</InputGroup.Append>
									</InputGroup>
								</Form.Group>
							</Form.Row>

							{/* deskripsi */}
							<Form.Row className='my-2'>
								<Form.Group as={Col}>
									<Form.Label htmlFor='deskripsi'>Deskripsi</Form.Label>
									<Quill theme='snow' />
								</Form.Group>
							</Form.Row>

							{/* Kontak */}
							<Form.Label className='mt-3'>Kontak</Form.Label>
							<Form.Row>
								{/* Kontak 1 */}
								<Form.Group as={Col} controlId='check-kontak1'>
									<Form.Control
										as='select'
										name='checkKontak1'
										ref={register()}
										custom
									>
										<option value='0'>Kosong</option>
										<option value='1'>Whatsapp</option>
										<option value='2'>Facebook</option>
										<option value='3'>Email</option>
									</Form.Control>
									<Form.Control
										name='kontak1'
										ref={register()}
										disabled={watch('checkKontak1') == 0 ? true : false}
										placeholder={
											watch('checkKontak1') == 1
												? '628xxxxxxxxx'
												: watch('checkKontak1') == 2
												? 'Facebook username'
												: watch('checkKontak1') == 3
												? 'your@email.com'
												: ''
										}
									/>
									<Form.Control
										className='mt-1'
										name='userKontak1'
										ref={register()}
										placeholder='Nama tampilan'
										disabled={watch('checkKontak1') == 0 ? true : false}
									/>
								</Form.Group>
								{/* Kontak 2 */}
								<Form.Group as={Col} controlId='check-kontak2'>
									<Form.Control
										as='select'
										name='checkKontak2'
										ref={register()}
										custom
									>
										<option value='0'>Kosong</option>
										<option value='1'>Whatsapp</option>
										<option value='2'>Facebook</option>
										<option value='3'>Email</option>
									</Form.Control>
									<Form.Control
										name='kontak2'
										ref={register()}
										disabled={watch('checkKontak2') == 0 ? true : false}
										placeholder={
											watch('checkKontak2') == 1
												? '628xxxxxxxxx'
												: watch('checkKontak2') == 2
												? 'Facebook username'
												: watch('checkKontak2') == 3
												? 'your@email.com'
												: ''
										}
									/>
									<Form.Control
										className='mt-1'
										name='userKontak2'
										ref={register()}
										placeholder='Nama tampilan'
										disabled={watch('checkKontak2') == 0 ? true : false}
									/>
								</Form.Group>
								{/* Kontak 3 */}
								<Form.Group as={Col} controlId='check-kontak3'>
									<Form.Control
										as='select'
										name='checkKontak3'
										ref={register()}
										custom
									>
										<option value='0'>Kosong</option>
										<option value='1'>Whatsapp</option>
										<option value='2'>Facebook</option>
										<option value='3'>Email</option>
									</Form.Control>
									<Form.Control
										name='kontak3'
										ref={register()}
										disabled={watch('checkKontak3') == 0 ? true : false}
										placeholder={
											watch('checkKontak3') == 1
												? '628xxxxxxxxx'
												: watch('checkKontak3') == 2
												? 'Facebook username'
												: watch('checkKontak3') == 3
												? 'your@email.com'
												: ''
										}
									/>
									<Form.Control
										className='mt-1'
										name='userKontak3'
										ref={register()}
										placeholder='Nama tampilan'
										disabled={watch('checkKontak3') == 0 ? true : false}
									/>
								</Form.Group>
								{/* Kontak 4 */}
								<Form.Group as={Col} controlId='check-kontak4'>
									<Form.Control
										as='select'
										name='checkKontak4'
										ref={register()}
										custom
									>
										<option value='0'>Kosong</option>
										<option value='1'>Whatsapp</option>
										<option value='2'>Facebook</option>
										<option value='3'>Email</option>
									</Form.Control>
									<Form.Control
										name='kontak4'
										ref={register()}
										disabled={watch('checkKontak4') == 0 ? true : false}
										placeholder={
											watch('checkKontak4') == 1
												? '628xxxxxxxxx'
												: watch('checkKontak4') == 2
												? 'Facebook username'
												: watch('checkKontak4') == 3
												? 'your@email.com'
												: ''
										}
									/>
									<Form.Control
										className='mt-1'
										name='userKontak4'
										ref={register()}
										placeholder='Nama tampilan'
										disabled={watch('checkKontak4') == 0 ? true : false}
									/>
								</Form.Group>
							</Form.Row>
						</Card.Body>
					</Card>
				</Row>
				<Row className='my-4 text-center'>
					<Col>
						<Button variant='success' type='submit' className='mr-2'>
							Submit
						</Button>
						<Button variant='secondary'>Cancel</Button>
					</Col>
				</Row>
			</Form>
		</Container>
	)
}

export default EditPropertyForm
