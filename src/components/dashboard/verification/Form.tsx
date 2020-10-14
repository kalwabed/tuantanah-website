import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Col, Form } from 'react-bootstrap'

import type { Property } from '../../../types/index.types'

interface Inputs {
	propertyId: string
}

interface Props {
	property: Property[]
}

const TheForm = ({ property }: Props) => {
	if (!property) return null
	const { register, handleSubmit } = useForm<Inputs>()
	const [labelCert, setLabelCert] = React.useState('Sertakan foto sertifikat')

	const submit = (data: Inputs) => {
		console.log(data)
	}

	return (
		<Form onSubmit={handleSubmit(submit)}>
			<Form.Row>
				<Form.Group as={Col}>
					<Form.Label>Property</Form.Label>
					<Form.Control ref={register()} name='propertyId' as='select' custom>
						{property.map(({ title, _id, status: { shm } }) =>
							!shm ? (
								<option value={_id} key={_id}>
									{title}
								</option>
							) : null
						)}
					</Form.Control>
				</Form.Group>

				<Form.Group as={Col}>
					<Form.Label>Sertifikat</Form.Label>
					<Form.File
						ref={register}
						multiple
						custom
						id='certificate'
						name='certificate'
						accept='image/*'
						label={labelCert}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLabelCert(`${e.target.files?.length} gambar dipilih`)}
					/>
				</Form.Group>
			</Form.Row>
			<Button type='submit' variant='success'>
				Submit
			</Button>
		</Form>
	)
}

export default TheForm
