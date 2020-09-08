/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { Form, Col, Button, Badge, InputGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import Quill from 'react-quill'

import { IApiUser } from '../../types/index.types'
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
	kontak1?: string
	kontak2?: string
	kontak3?: string
	kontak4?: string
	checkKontak1?: number | string
	checkKontak2?: number | string
	checkKontak3?: number | string
	checkKontak4?: number | string
	userKontak1?: string
	userKontak2?: string
	userKontak3?: string
	userKontak4?: string
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
	// BEGIN ----------------------------
	const { setValue, watch, register, handleSubmit, errors } = useForm<Inputs>()
	const [isPanjangLebar, setIsPanjangLebar] = useState(false)
	const [kota, setKota] = useState<number>(11)
	const [description, setDescription] = useState('')
	const { data, isFetching, isLoading, isError } = useQuery(
		['kota', kota],
		fetchKotaByProv,
	)

	const onSubmit = (data: Inputs) => {
		setValue('title', '')
		console.log(data)
	}

	if (isError) return <span>An error has been appearred!</span>
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
				<Form.Row>
					<Form.Group as={Col} controlId='select-provinsi'>
						<Form.Label>Provinsi</Form.Label>
						<Form.Control
							ref={register({ required: 'Please provide a valid provinsi' })}
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
							<ErrorMessage
								name='provinsi'
								errors={errors}
								render={({ message }) => (
									<Badge variant='danger'>{message}</Badge>
								)}
							/>
						</Form.Control>
					</Form.Group>
					<Form.Group as={Col} controlId='select-kota'>
						<Form.Label>Kota/kabupaten</Form.Label>
						<Form.Control
							ref={register({ required: 'Please provide a valid kota' })}
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
						<ErrorMessage
							name='kota'
							errors={errors}
							render={({ message }) => (
								<Badge variant='danger'>{message}</Badge>
							)}
						/>
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
								ref={
									!isPanjangLebar
										? register({ required: 'Please provide a valid luas' })
										: register()
								}
								name='luas'
								placeholder='e.g 15'
							/>
							<InputGroup.Append>
								<InputGroup.Text>Hektar</InputGroup.Text>
							</InputGroup.Append>
						</InputGroup>
						<ErrorMessage
							name='luas'
							errors={errors}
							render={({ message }) => (
								<Badge variant='danger'>{message}</Badge>
							)}
						/>
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
							ref={
								isPanjangLebar
									? register({ required: 'Please provide a valid panjang' })
									: register()
							}
							name='panjang'
							placeholder='e.g 10'
						/>
						<ErrorMessage
							name='panjang'
							errors={errors}
							render={({ message }) => (
								<Badge variant='danger'>{message}</Badge>
							)}
						/>
					</Form.Group>
					<Form.Group controlId='input-lebar' as={Col}>
						<Form.Label>Lebar</Form.Label>
						<Form.Control
							type='number'
							disabled={!isPanjangLebar}
							ref={
								isPanjangLebar
									? register({ required: 'Please provide a valid lebar' })
									: register()
							}
							name='lebar'
							placeholder='e.g 12'
						/>
						<ErrorMessage
							name='lebar'
							errors={errors}
							render={({ message }) => (
								<Badge variant='danger'>{message}</Badge>
							)}
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
								ref={register({ required: 'Please provide a valid harga' })}
								name='harga'
								placeholder='e.g 79'
							/>
							<InputGroup.Append>
								<InputGroup.Text>Juta</InputGroup.Text>
							</InputGroup.Append>
						</InputGroup>
						<ErrorMessage
							name='harga'
							errors={errors}
							render={({ message }) => (
								<Badge variant='danger'>{message}</Badge>
							)}
						/>
					</Form.Group>
					<Form.Group controlId='input-foto' as={Col}>
						<Form.Label>Foto utama</Form.Label>
						<Form.File
							id='mainpic-file'
							name='mainPicture'
							label='Unggah foto'
							ref={register({
								required: 'Please provide a valid main picture',
							})}
							custom
						/>
						<ErrorMessage
							name='mainPicture'
							errors={errors}
							render={({ message }) => (
								<Badge variant='danger'>{message}</Badge>
							)}
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
				<Form.Row>
					<Form.Group as={Col} className='h-100'>
						<Form.Label>Deskripsi</Form.Label>
						<Quill theme='snow' value={description} onChange={setDescription} />
					</Form.Group>
				</Form.Row>

				{/* Kontak */}
				<Form.Label>Kontak</Form.Label>
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

				{/* Tombol submit & cancel */}
				<Form.Row className='mt-2'>
					<Form.Group as={Col}>
						<Link to='/dashboard'>
							<Button className='mr-2' variant='secondary'>
								Back
							</Button>
						</Link>
						<Button className='' variant='success' type='submit'>
							Submit
						</Button>
					</Form.Group>
				</Form.Row>
			</Form>
		</>
	)
}

export default AddPropertyForm
