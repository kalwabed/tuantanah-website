import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { useQuery } from 'react-query'
import Header from '../../components/dashboard/Header'
import Form from '../../components/dashboard/verification/Form'
import { authContext } from '../../contexts/Auth'
import { fetchPropertyByUserID } from '../../utils/fetchAPI'

const Verification = () => {
	const { user } = React.useContext(authContext)
	const { data, isLoading } = useQuery(['userProperty', user._id], fetchPropertyByUserID)
	return (
		<>
			<Header />
			<Container>
				<Row className='mt-3 px-5'>
					<Col>
						{isLoading && <Spinner animation='grow' variant='success' />}
						{/* @ts-ignore */}
						{!isLoading && <Form property={data.property} />}
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Verification
