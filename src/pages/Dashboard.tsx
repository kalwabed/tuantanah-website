import React, { useContext, useEffect } from 'react'

import { authContext } from '../contexts/Auth'
import verify from '../utils/Verify'
import Header from '../components/dashboard/Header'
import Table from '../components/dashboard/Table'

const Dashboard = (props: any) => {
	document.title = 'Dashboard | tuantanah'
	window.scrollTo(0, 0)
	const { setToken, setIsAuthenticated, user } = useContext(authContext)

	useEffect(() => {
		verify.User()
	}, [])

	const onLogout = () => {
		setToken(null, false)
		setIsAuthenticated(false)
		props.history.push('/')
	}

	return (
		<div>
			<Header />
			<h2>Welcome {user.email}</h2>
			<h3>Your role is {user.role == 1 ? 'admin' : 'user'}</h3>
			<button onClick={onLogout}>Logout</button>
			<Table />
		</div>
	)
}

export default Dashboard
