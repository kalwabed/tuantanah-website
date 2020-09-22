/* eslint-disable react/prop-types */
import React, { useState } from 'react'
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
import { useQuery } from 'react-query'
import Quill from 'react-quill'
import { Link } from 'react-router-dom'
import {
	apiKotaKab,
	apiProvinsi,
	Inputs,
	Property,
} from '../../types/index.types'
import { fetchKotaByProv } from '../../utils/fetchAPI'

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
	const {
		isLarge,
		title,
		size,
		price,
		status,
		description,
		contact,
		mainPicture,
		gallery,
	} = prop
	const { register, watch } = useForm<newInputs>()
	const [kota, setKota] = useState(11)
	const [deskripsi, setDeskripsi] = useState(description)
	const [isLuas, setIsLuas] = useState(isLarge)
	const { data, isLoading } = useQuery(['kota', kota], fetchKotaByProv)

	return (
		<Container fluid>
			<Form>
				<Row>
					{/* gambar utama dan galeri  */}
					<Card as={Col} className='mr-2'>
						<Card.Body>
							<Row>
								<Card.Img
									src={mainPicture}
									alt={title}
									className='img-gallery'
								/>
							</Row>

							<Row className='my-2'>
								<Form.Group as={Col}>
									<Form.Label htmlFor='mainPicture'>Foto Utama</Form.Label>
									<Form.File
										ref={register}
										accept='image/*'
										custom
										id='mainPicture'
										name='mainPicture'
										label='Unggah foto'
									/>
								</Form.Group>
							</Row>

							<Row>
								{gallery.length < 1 && (
									<Col>
										<Card className='text-center text-muted'>
											<Card.Body>Galeri belum ditambahkan</Card.Body>
										</Card>
									</Col>
								)}
								{gallery.length >= 1 &&
									gallery.map(gall => (
										<Col key={gall.imageUrl}>
											<Card.Img src={gall.imageUrl} alt='Gallery' />
										</Col>
									))}
							</Row>
						</Card.Body>
					</Card>

					{/* identitas */}
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
										defaultValue={title}
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
										{dataProvinsi.provinsi.map(prov => (
											<option
												onClick={() => setKota(prov.id)}
												key={prov.id}
												value={prov.id}
											>
												{prov.nama}
											</option>
										))}
									</Form.Control>
								</Form.Group>
								{/* kota */}
								<Form.Group as={Col}>
									<Form.Label htmlFor='kota'>Kota/Kabupaten</Form.Label>
									<Form.Control
										ref={register}
										disabled={isLoading}
										id='kota'
										name='kota'
										custom
										as='select'
									>
										<option value='' disabled>
											-- Kota/Kabupaten --
										</option>
										{data &&
											data.kota_kabupaten.map((kota: apiKotaKab) => (
												<option key={kota.id} value={kota.id}>
													{kota.nama}
												</option>
											))}
									</Form.Control>
								</Form.Group>
							</Form.Row>

							{/* panjang & lebar */}
							<Form.Row>
								{/* panjang */}
								<Form.Group as={Col}>
									<Form.Label htmlFor='panjang'>Panjang</Form.Label>
									<Form.Control
										ref={register}
										disabled={isLuas}
										defaultValue={!isLuas ? size.long : ''}
										id='panjang'
										name='panjang'
										placeholder='contoh: 10'
									/>
								</Form.Group>
								{/* lebar */}
								<Form.Group as={Col}>
									<Form.Label htmlFor='lebar'>Lebar</Form.Label>
									<Form.Control
										ref={register}
										disabled={isLuas}
										defaultValue={!isLuas ? size.wide : ''}
										id='lebar'
										name='lebar'
										placeholder='contoh: 1,5'
									/>
								</Form.Group>
							</Form.Row>

							{/* ceklis pakai luas */}
							<Form.Row>
								<Form.Group as={Col}>
									<Form.Check
										ref={register}
										onClick={() => setIsLuas(!isLuas)}
										id='isLuas'
										name='isLuas'
										defaultChecked={isLuas}
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
											ref={register}
											disabled={!isLuas}
											defaultValue={isLuas ? size.large : ''}
											id='luas'
											name='luas'
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
											ref={register}
											defaultValue={price}
											id='harga'
											name='harga'
											placeholder='contoh: 10'
										/>
										<InputGroup.Append>
											<InputGroup.Text>
												<Form.Check
													ref={register}
													defaultChecked={status.negotiation}
													name='nego'
													id='nego'
													label='Negosiasi ?'
													type='checkbox'
													custom
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
									<Quill
										theme='snow'
										value={deskripsi}
										onChange={setDeskripsi}
									/>
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
										{contact[0] ? (
											<>
												<option value={contact[0].type}>
													{contact[0].type == 1
														? 'Whatsapp'
														: contact[0].type == 2
														? 'Facebook'
														: contact[0].type == 3
														? 'Email'
														: ''}
												</option>
												{contact[0].type !== 1 && (
													<option value='1'>Whatsapp</option>
												)}
												{contact[0].type !== 2 && (
													<option value='2'>Facebook</option>
												)}
												{contact[0].type !== 3 && (
													<option value='3'>Email</option>
												)}
												<option value='0'>Kosong</option>
											</>
										) : (
											<>
												<option value='0'>Kosong</option>
												<option value='1'>Whatsapp</option>
												<option value='2'>Facebook</option>
												<option value='3'>Email</option>
											</>
										)}
									</Form.Control>
									<Form.Control
										name='kontak1'
										ref={register()}
										disabled={watch('checkKontak1') == 0 ? true : false}
										defaultValue={contact[0].url ? contact[0].url : ''}
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
										defaultValue={contact[0].name ? contact[0].name : ''}
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
										{contact[1] ? (
											<>
												<option value={contact[1].type}>
													{contact[1].type == 1
														? 'Whatsapp'
														: contact[1].type == 2
														? 'Facebook'
														: contact[1].type == 3
														? 'Email'
														: ''}
												</option>
												{contact[1].type !== 1 && (
													<option value='1'>Whatsapp</option>
												)}
												{contact[1].type !== 2 && (
													<option value='2'>Facebook</option>
												)}
												{contact[1].type !== 3 && (
													<option value='3'>Email</option>
												)}
												<option value='0'>Kosong</option>
											</>
										) : (
											<>
												<option value='0'>Kosong</option>
												<option value='1'>Whatsapp</option>
												<option value='2'>Facebook</option>
												<option value='3'>Email</option>
											</>
										)}
									</Form.Control>
									<Form.Control
										name='kontak2'
										ref={register()}
										disabled={watch('checkKontak2') == 0 ? true : false}
										defaultValue={contact[1] ? contact[1].url : ''}
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
										defaultValue={contact[1] ? contact[1].name : ''}
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
										{contact[2] ? (
											<>
												<option value={contact[2].type}>
													{contact[2].type == 1
														? 'Whatsapp'
														: contact[2].type == 2
														? 'Facebook'
														: contact[2].type == 3
														? 'Email'
														: ''}
												</option>
												{contact[2].type !== 1 && (
													<option value='1'>Whatsapp</option>
												)}
												{contact[2].type !== 2 && (
													<option value='2'>Facebook</option>
												)}
												{contact[2].type !== 3 && (
													<option value='3'>Email</option>
												)}
												<option value='0'>Kosong</option>
											</>
										) : (
											<>
												<option value='0'>Kosong</option>
												<option value='1'>Whatsapp</option>
												<option value='2'>Facebook</option>
												<option value='3'>Email</option>
											</>
										)}
									</Form.Control>
									<Form.Control
										name='kontak3'
										defaultValue={contact[2] ? contact[2].url : ''}
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
										defaultValue={contact[2] ? contact[2].name : ''}
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
										{contact[3] ? (
											<>
												<option value={contact[3].type}>
													{contact[3].type == 1
														? 'Whatsapp'
														: contact[3].type == 2
														? 'Facebook'
														: contact[3].type == 3
														? 'Email'
														: ''}
												</option>
												{contact[3].type !== 1 && (
													<option value='1'>Whatsapp</option>
												)}
												{contact[3].type !== 2 && (
													<option value='2'>Facebook</option>
												)}
												{contact[3].type !== 3 && (
													<option value='3'>Email</option>
												)}
												<option value='0'>Kosong</option>
											</>
										) : (
											<>
												<option value='0'>Kosong</option>
												<option value='1'>Whatsapp</option>
												<option value='2'>Facebook</option>
												<option value='3'>Email</option>
											</>
										)}
									</Form.Control>
									<Form.Control
										name='kontak4'
										ref={register()}
										defaultValue={contact[3] ? contact[3].url : ''}
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
										defaultValue={contact[3] ? contact[3].name : ''}
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
						<Link to='/dashboard'>
							<Button variant='secondary'>Back</Button>
						</Link>
					</Col>
				</Row>
			</Form>
		</Container>
	)
}

export default EditPropertyForm
