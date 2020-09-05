import React, { useContext, useEffect } from 'react'

import { authContext } from '../contexts/Auth'
import verify from '../utils/Verify'
import Header from '../components/dashboard/Header'
import Table from '../components/dashboard/Table'
import { propertiesContext } from '../contexts/Properties'
import { Spinner } from 'react-bootstrap'

const Dashboard = (props: any) => {
	document.title = 'Dashboard | tuantanah'
	window.scrollTo(0, 0)
	const { setToken, setIsAuthenticated, user } = useContext(authContext)
	const { propertyById, getPropertyById, isLoading } = useContext(
		propertiesContext,
	)

	useEffect(() => {
		verify.User()
		getPropertyById(user._id)
	}, [])

	const onLogout = () => {
		setToken(null, false)
		setIsAuthenticated(false)
		props.history.push('/')
	}

	if (propertyById.length === 0) {
		getPropertyById(user._id)
	}

	return (
		<>
			<Header />
			<h2>Welcome {user.email}</h2>
			<h3>Your role is {user.role == 1 ? 'admin' : 'user'}</h3>
			<button onClick={onLogout}>Logout</button>
			{isLoading && <Spinner animation='grow' />}
			{!isLoading && <Table />}
		</>
	)
}

export default Dashboard
