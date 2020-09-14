/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Container, Row, Card, Form, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import logo from '../../img/logo.png'
import ButtonLoading from '../../elements/ButtonLoading'
import { fetchRegister } from '../../utils/fetchAPI'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { ErrorMessage } from '@hookform/error-message'

interface SignUpForm {
	email: string
	fullName: string
	password: string
	repeatPassword: string
}

const FormRegister = () => {
	const { register, errors, handleSubmit, watch, setValue, trigger } = useForm<
		SignUpForm
	>()
	const [mutate, { isLoading }] = useMutation(fetchRegister)
	const [check, setCheck] = useState<boolean>(false)

	const onSubmit = async (data: SignUpForm) => {
		toast.dismiss()

		const res = await mutate({
			email: data.email,
			password: data.password,
			repeatPassword: data.repeatPassword,
			fullName: data.fullName,
		})
		if (res!.success === true) {
			// SUKSES
			toast.success(res!.msg)
			setCheck(false)
		} else {
			setValue('repeatPassword', '')
			if (res!.errorCode === 400) {
				toast.warning(res!.msg)
			} else {
				toast.info(res!.msg)
			}
		}
	}

	return (
		<section className='h-100'>
			<Container className='h-100'>
				<Row className='justify-content-md-center h-100'>
					<div className='card-wrapper'>
						<div className='brand'>
							<img src={logo} alt='logo' />
						</div>
						<div className='card-fat'>
							<Card.Body>
								<Card.Title as='h4'>Create an tuantanah account</Card.Title>
								<Form onSubmit={handleSubmit(onSubmit)}>
									<Form.Group>
										<Form.Label>Fullname</Form.Label>
										<Form.Control
											ref={register({
												required: 'Please provide a Full Name',
												maxLength: {
													value: 50,
													message:
														'Full Name is reached the maximum length! (50)',
												},
												minLength: {
													value: 3,
													message: 'Full Name min length is 3 chars',
												},
											})}
											onChange={() => trigger('fullName')}
											disabled={isLoading}
											name='fullName'
											type='text'
											placeholder='i.e John Bejo'
										/>
										<ErrorMessage
											name='fullName'
											errors={errors}
											render={({ message }) => (
												<Badge variant='warning'>{message}</Badge>
											)}
										/>
									</Form.Group>

									<Form.Group>
										<Form.Label>Email address</Form.Label>
										<Form.Control
											ref={register({
												required: 'Please provide an email',
												maxLength: {
													value: 30,
													message: 'Email is reached the maximum length! (30)',
												},
												pattern: {
													// eslint-disable-next-line no-useless-escape
													value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
													message: 'Please provide a valid email format',
												},
											})}
											onChange={() => trigger('email')}
											disabled={isLoading}
											name='email'
											type='email'
											placeholder='i.e example@do.it'
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
										<Form.Label>Password</Form.Label>
										<Form.Control
											ref={register({
												required: 'Please provide an password',
												maxLength: {
													value: 120,
													message:
														'Password is reached the maximum length! (120)',
												},
												minLength: {
													value: 8,
													message: 'Password is must at least 8 chars',
												},
											})}
											onChange={() => trigger('password')}
											disabled={isLoading}
											name='password'
											type='password'
											placeholder='min. 8 chars'
										/>
										<ErrorMessage
											name='password'
											errors={errors}
											render={({ message }) => (
												<Badge variant='warning'>{message}</Badge>
											)}
										/>
									</Form.Group>

									<Form.Group>
										<Form.Label>Confirm password</Form.Label>
										<Form.Control
											ref={register({
												validate: value =>
													value == watch('password') ||
													'Confirm Password must same as password',
											})}
											onChange={() => trigger('repeatPassword')}
											disabled={isLoading}
											name='repeatPassword'
											type='password'
											placeholder='repeat your password'
										/>
										<ErrorMessage
											name='repeatPassword'
											errors={errors}
											render={({ message }) => (
												<Badge variant='warning'>{message}</Badge>
											)}
										/>
									</Form.Group>

									<Form.Group>
										<Form.Check
											custom
											required
											onClick={() => setCheck(!check)}
											checked={check}
											id='checkbox'
											type='checkbox'
											label='Agree with our terms and conditions'
										/>
									</Form.Group>

									<Form.Group className='m-0'>
										<ButtonLoading
											loading={isLoading}
											block
											fill='Sign Up'
											password={watch('repeatPassword')}
											type='submit'
										/>
									</Form.Group>

									<div className='mt-4 text-center'>
										already have an account? <Link to='/signin'>sign in</Link>
									</div>
									<p className='text-center'>
										go back to <Link to='/'>home</Link>
									</p>
								</Form>
							</Card.Body>
						</div>
					</div>
				</Row>
			</Container>
		</section>
	)
}

export default FormRegister
