import React, { useContext } from 'react'
import AddPropertyForm from '../components/dashboard/AddPropertyForm'
import { Container, Card } from 'react-bootstrap'
import Header from '../components/dashboard/Header'
import { IoMdRocket } from 'react-icons/io'
import { authContext } from '../contexts/Auth'

const AddProperty = () => {
	const { user } = useContext(authContext)
	return (
		<>
			<Header />
			<Container>
				<Card>
					<Card.Header>Add property</Card.Header>
					<Card.Body>
						<AddPropertyForm user={user} />
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
