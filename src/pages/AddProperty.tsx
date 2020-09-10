import React, { useContext } from 'react'
import { IoMdRocket } from 'react-icons/io'
import { Container, Card } from 'react-bootstrap'
import { useQuery } from 'react-query'
import 'react-quill/dist/quill.snow.css'

import AddPropertyForm from '../components/dashboard/AddPropertyForm'
import Header from '../components/dashboard/Header'
import { authContext } from '../contexts/Auth'
import { fetchProvinsi } from '../utils/fetchAPI'

const AddProperty = () => {
	const { user } = useContext(authContext)
	const { data, isLoading } = useQuery('provinsi', fetchProvinsi)

	return (
		<>
			<Header />
			<Container>
				<Card>
					<Card.Header>Add property</Card.Header>
					<Card.Body>
						{isLoading && <p>Loading...</p>}
						{!isLoading && <AddPropertyForm user={user} dataProvinsi={data} />}
					</Card.Body>
					<Card.Footer className='text-center'>
						<IoMdRocket />
					</Card.Footer>
				</Card>
			</Container>
		</>
	)
}

export default AddProperty
