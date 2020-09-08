/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { Form, Col, Button, Badge, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { IApiUser } from '../../types/index.types'
import { useQuery } from 'react-query'
import { fetchKotaByProv } from '../../utils/fetchAPI'

type Inputs = {
	fullName: string
	title: string
	provinsi: string
	kota: string
	luas?: number
	panjang?: number
	lebar?: number
	harga?: number
	mainPicture: string
	nego: boolean
}

type dataProvinsi = {
	provinsi: [
		{
			id: number
			nama: string
		},
	]
}

type kotaKab = {
	id: number
	id_provinsi: string
	nama: string
}

const AddPropertyForm = ({
	user,
	dataProvinsi,
}: {
	user: IApiUser
	dataProvinsi: dataProvinsi
}) => {
	const { setValue, register, handleSubmit, errors } = useForm<Inputs>()
	const [isPanjangLebar, setIsPanjangLebar] = useState(false)
	const [kota, setKota] = useState<number>(11)
	const { data, isFetching, isLoading, isError } = useQuery(
		['kota', kota],
		fetchKotaByProv,
	)

	const onSubmit = (data: Inputs) => {
		setValue('title', '')
		console.log(data)
	}

	if (isError) return alert('An error is appeared. Please refresh the page.')
	return (
		<>
			<Form onSubmit={handleSubmit(onSubmit)}>
				{/* fullname dan title */}
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>Fullname / Company name</Form.Label>
						<Form.Control
							ref={register()}
							name='fullName'
							placeholder='e.g Kaliwa Coorporation'
							defaultValue={user.fullName}
							readOnly
						/>
					</Form.Group>
					<Form.Group controlId='input-title' as={Col}>
						<Form.Label>Title</Form.Label>
						<Form.Control
							ref={register({
								required: 'Please provide a valid title',
								minLength: { value: 5, message: 'Min length is 5' },
							})}
							name='title'
							placeholder='e.g Kaliwa Residence'
						/>
						<ErrorMessage
							name='title'
							errors={errors}
							render={({ message }) => (
								<Badge variant='danger'>{message}</Badge>
							)}
						/>
					</Form.Group>
				</Form.Row>

				{/* lokasi */}
				{/* TODO tembak API wilayah indonesia */}
				<Form.Row>
					<Form.Group as={Col} controlId='select-provinsi'>
						<Form.Label>Provinsi</Form.Label>
						<Form.Control
							ref={register()}
							name='provinsi'
							as='select'
							custom
							disabled={isLoading}
						>
							<option value='' disabled>
								-- Provinsi --
							</option>
							{dataProvinsi.provinsi.map(prov => (
								<option
									key={prov.id}
									value={prov.id}
									onClick={() => setKota(prov.id)}
								>
									{prov.nama}
								</option>
							))}
						</Form.Control>
					</Form.Group>
					<Form.Group as={Col} controlId='select-kota'>
						<Form.Label>Kota/kabupaten</Form.Label>
						<Form.Control
							ref={register()}
							name='kota'
							as='select'
							custom
							disabled={isLoading}
						>
							<option value='' disabled>
								-- Kota --
							</option>
							{data &&
								data.kota_kabupaten.map((kota: kotaKab) => (
									<option key={kota.id} value={kota.id}>
										{kota.nama}
									</option>
								))}
						</Form.Control>
						{isFetching && (
							<span className='text-secondary'>Refreshing...</span>
						)}
					</Form.Group>
				</Form.Row>

				{/* Luas */}
				<Form.Row>
					<Form.Group as={Col} controlId='input-luas'>
						<Form.Label>Luas</Form.Label>
						<InputGroup>
							<Form.Control
								disabled={isPanjangLebar}
								type='number'
								ref={register()}
								name='luas'
								placeholder='e.g 15'
							/>
							<InputGroup.Append>
								<InputGroup.Text>Hektar</InputGroup.Text>
							</InputGroup.Append>
						</InputGroup>
					</Form.Group>
				</Form.Row>

				{/* Ceklis panjang-lebar */}
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Check
							label='Pakai ukuran panjang dan lebar'
							custom
							id='pan-luas-check'
							onClick={() => setIsPanjangLebar(!isPanjangLebar)}
						/>
					</Form.Group>
				</Form.Row>

				{/* Panjang & lebar */}
				<Form.Row>
					<Form.Group controlId='input-panjang' as={Col}>
						<Form.Label>Panjang</Form.Label>
						<Form.Control
							type='number'
							disabled={!isPanjangLebar}
							ref={register()}
							name='panjang'
							placeholder='e.g 10'
						/>
					</Form.Group>
					<Form.Group controlId='input-lebar' as={Col}>
						<Form.Label>Lebar</Form.Label>
						<Form.Control
							type='number'
							disabled={!isPanjangLebar}
							ref={register()}
							name='lebar'
							placeholder='e.g 12'
						/>
					</Form.Group>
				</Form.Row>

				{/* harga dan foto utama */}
				<Form.Row>
					<Form.Group controlId='input-harga' as={Col}>
						<Form.Label>Harga</Form.Label>
						<InputGroup>
							<Form.Control
								type='number'
								ref={register()}
								name='harga'
								placeholder='e.g 79'
							/>
							<InputGroup.Append>
								<InputGroup.Text>Juta</InputGroup.Text>
							</InputGroup.Append>
						</InputGroup>
					</Form.Group>
					<Form.Group controlId='input-foto' as={Col}>
						<Form.Label>Foto utama</Form.Label>
						<Form.File
							id='mainpic-file'
							name='mainPicture'
							label='Unggah foto'
							ref={register()}
							custom
						/>
					</Form.Group>
				</Form.Row>

				{/* Ceklis negosiasi */}
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Check
							custom
							name='nego'
							ref={register()}
							id='check-nego'
							label='Negosiasi?'
							type='checkbox'
						/>
					</Form.Group>
				</Form.Row>

				{/* Deskripsi */}
				{/* TODO pakai text WYSIWYG */}
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label>Deskripsi</Form.Label>
						<Form.Control type='fieldset' ref={register()} name='deskripsi' />
					</Form.Group>
				</Form.Row>

				<div className='mt-2'>
					<Link to='/dashboard'>
						<Button className='mr-2' variant='secondary'>
							Back
						</Button>
					</Link>
					<Button className='' variant='success' type='submit'>
						Submit
					</Button>
				</div>
			</Form>
		</>
	)
}

export default AddPropertyForm
