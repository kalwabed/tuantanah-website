import React from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { useQuery } from 'react-query'

import Header from '../../components/dashboard/Header'
import Form from '../../components/dashboard/verification/Form'
import Footer from '../../components/Footer'
import { authContext } from '../../contexts/Auth'
import { fetchPropertyByUserID } from '../../utils/fetchAPI'

const Verification = () => {
	document.title = 'Verifikasi'
	const { user } = React.useContext(authContext)
	const { data, isLoading } = useQuery(['userProperty', user._id], fetchPropertyByUserID)
	return (
		<>
			<Header />
			<Container className='mb-4'>
				{isLoading && (
					<div className='text-center pt-4'>
						<Spinner animation='grow' variant='success' />
					</div>
				)}
				{/* @ts-ignore */}
				{!isLoading && <Form property={data.property} />}
			</Container>
			{!isLoading && <Footer isDashboard />}
		</>
	)
}

export default Verification
