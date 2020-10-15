/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Card, Col, Form, Row, Spinner } from 'react-bootstrap'
import { useMutation, useQueryCache } from 'react-query'
import { toast } from 'react-toastify'

import type { Property } from '../../../types/index.types'
import { fetchAddCertificate } from '../../../utils/fetchAPI'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

interface Inputs {
	propertyId: string
	certificate: FileList
}

interface Props {
	property: Property[]
}

const TheForm = ({ property }: Props) => {
	if (!property) return null
	const queryCache = useQueryCache()
	const { register, handleSubmit, setValue } = useForm<Inputs>()
	const [labelCert, setLabelCert] = useState('Sertakan foto sertifikat')
	const [imgPreview, setImgPreview] = useState<string[]>([])
	const [mutate, { isLoading }] = useMutation(fetchAddCertificate, {
		onSuccess: () => {
			queryCache.invalidateQueries('userProperty')
		},
		onError: () => {
			toast.error('Ups! tampaknya ada masalah saat mengunggah sertifikat')
		}
	})

	const submit = async (data: Inputs) => {
		const formData = new FormData()
		formData.append('propertyId', data.propertyId)

		for (let i = 0; i < data.certificate.length; i++) {
			formData.append('certificate', data.certificate[i])
		}

		//? for development purpose!
		// formData.forEach((val, key) => {
		// 	console.log(`${key}, ${val}`)
		// })
		//? ----------------------

		try {
			const result = await mutate(formData)
			if (!result.success) {
				toast.error(result.msg)
				return
			}
			setLabelCert('Sertakan foto sertifikat')
			setValue('certificate', undefined)
			setImgPreview([])
			toast.success(result.msg)
		} catch (err) {
			console.error(err)
		}
	}

	const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLabelCert(`${e.target.files?.length} gambar dipilih`)

		//? preview multiple image
		const imgObj = []
		const imgArr = []
		imgObj.push(e.target.files!)
		for (let i = 0; i < imgObj[0].length; i++) {
			imgArr.push(URL.createObjectURL(imgObj[0][i]))
		}
		setImgPreview(imgArr)
	}

	return (
		<>
			<Form onSubmit={handleSubmit(submit)}>
				<Row className='mt-3 px-5'>
					<Col>
						<Form.Row>
							<Form.Group as={Col}>
								<Form.Label>Properti</Form.Label>
								<Form.Control ref={register()} name='propertyId' as='select' custom disabled={isLoading}>
									{property.map(({ title, _id, status: { shm } }) =>
										shm === 0 ? (
											<option value={_id} key={_id}>
												{title}
											</option>
										) : (
											<option value='' disabled>
												{title} ({shm === 1 ? 'proses verifikasi' : 'sudah terverifikasi'})
											</option>
										)
									)}
								</Form.Control>
								<Form.Text>Pilih properti</Form.Text>
							</Form.Group>

							<Form.Group as={Col}>
								<Form.Label>Sertifikat</Form.Label>
								<Form.File
									ref={register({ required: true })}
									multiple
									custom
									id='certificate'
									name='certificate'
									accept='image/*'
									disabled={isLoading}
									label={labelCert}
									onChange={handleImage}
								/>
							</Form.Group>
						</Form.Row>
					</Col>
				</Row>
				<Row className='mt-3 px-5'>
					<Col>
						<h3>Pratinjau dokumen</h3>
						<Row>
							{imgPreview.length !== 0 && (
								<Fade className='col' triggerOnce cascade>
									{imgPreview.map(source => (
										<img src={source} key={source} alt='certificate' width='100%' />
									))}
								</Fade>
							)}
							{imgPreview.length === 0 && <Col className='text-center border mx-3'>Tidak ada</Col>}
						</Row>
					</Col>
				</Row>
				<Row className='mt-3 px-5'>
					<Col>
						<InformationCard />
					</Col>
				</Row>
				<Row className='mt-3 px-5'>
					<Col>
						<FormButton isLoading={isLoading} />
					</Col>
				</Row>
			</Form>
		</>
	)
}

const InformationCard = () => (
	<Card>
		<Card.Header>Perhatian</Card.Header>
		<Card.Body>
			Verifikasi <b>Sertifikat Hak Milik (SHM)</b> akan meningkatkan kepercayaan calon pelanggan kepada penyedia properti, dengan harus
			memperhatikan ketentuan-ketentuan berikut:
			<ul>
				<li>Sertakan foto sertifikat yang jelas, dan sertakan semua dokumen-dokumen yang dirasa perlu sesuai kaidah yang berlaku.</li>
				<li>Pastikan Anda menyertakan sertifikat yang legal, sah secara hukum, dan orisinil.</li>
				<li>Kami tidak tidak akan memproses sertifikat atau dokumen yang bermasalah secara hukum ataupun secara fisik.</li>
				<li>
					Proses verifikasi/validasi <b>Sertifikat Hak Milik (SHM)</b> setidaknya membutuhkan waktu 3x24 jam.{' '}
				</li>
				<li>Kami akan segera menghubungi Anda melalui email apabila proses validasi telah selesai.</li>
				<br />
				Jika terjadi masalah silahkan menghubungi kami melalui alamat email:{' '}
				<a href='mailto:admin@tuantanah.id'>
					<b>admin@tuantanah.id</b>
				</a>
			</ul>
		</Card.Body>
	</Card>
)

const FormButton = ({ isLoading = false }) => (
	<>
		<Link to='/dashboard'>
			<Button disabled={isLoading} variant='secondary' className='mr-2'>
				Kembali
			</Button>
		</Link>
		<Button type='submit' disabled={isLoading} variant={isLoading ? 'secondary' : 'success'}>
			{!isLoading && 'Kirim'}
			{isLoading && <Spinner as='span' animation='border' variant='light' size='sm' />}
		</Button>
	</>
)
export default TheForm
