/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Row, Card, Form, Badge } from 'react-bootstrap'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { ErrorMessage } from '@hookform/error-message'

import '../../auth.css'
import logo from '../../img/logo.png'
import ButtonLoading from '../../elements/ButtonLoading'
import { authContext } from '../../contexts/Auth'
import { fetchLogin } from '../../utils/fetchAPI'

interface SignInForm {
	email: string
	password: string
}
const FormLogin = () => {
	const { register, handleSubmit, watch, errors } = useForm<SignInForm>()
	const { setToken, setIsAuthenticated } = useContext(authContext)
	const [mutate, { isLoading }] = useMutation(fetchLogin)

	const onSubmit = async (data: SignInForm) => {
		toast.dismiss()
		const res = await mutate({ email: data.email, password: data.password })
		if (res?.success === true) {
			// SUKSES LOGIN
			setToken(res.token!, true)
			setIsAuthenticated(true)
		} else {
			// GAGAL LOGIN
			if (res?.errorCode === 400) {
				// bad request
				toast.warning(res?.msg)
			} else {
				// unauthorized
				toast.info(res?.msg)
			}
		}
	}

	return (
		<section className='h-100'>
			<Row className='justify-content-md-center h-100'>
				<div className='card-wrapper'>
					<div className='brand'>
						<img src={logo} alt='logo' />
					</div>
					<div className='card-fat'>
						<Card.Body>
							<Card.Title as='h4'>Masuk</Card.Title>
							<Form onSubmit={handleSubmit(onSubmit)}>
								<Form.Group>
									<Form.Label>Alamat Email</Form.Label>
									<Form.Control
										ref={register({
											required: 'Mohon sertakan Alamat Email yang valid',
											pattern: {
												// eslint-disable-next-line no-useless-escape
												value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
												message:
													'Mohon sertakan format Alamat Email yang valid',
											},
										})}
										name='email'
										autoFocus
										type='email'
										disabled={isLoading}
									/>
									<ErrorMessage
										name='email'
										errors={errors}
										render={({ message }) => (
											<Badge variant='warning'>{message}</Badge>
										)}
									/>
								</Form.Group>

								<Form.Group>
									<Form.Label>Kata Sandi</Form.Label>
									<Form.Control
										name='password'
										type='password'
										ref={register({
											required: 'Mohon sertakan Kata Sandi yang valid',
										})}
										disabled={isLoading}
									/>
									<ErrorMessage
										name='password'
										errors={errors}
										render={({ message }) => (
											<Badge variant='warning'>{message}</Badge>
										)}
									/>
								</Form.Group>
								<Form.Group className='m-0'>
									<ButtonLoading
										fill='Masuk'
										block
										password={watch('password')}
										loading={isLoading}
										type='submit'
									/>
								</Form.Group>
								<div className='mt-4 text-center'>
									belum punya akun? <Link to='/signup'>daftar</Link>
								</div>
								<p className='text-center'>
									kembali ke <Link to='/'>home</Link>
								</p>
							</Form>
						</Card.Body>
					</div>
				</div>
			</Row>
		</section>
	)
}

export default FormLogin
