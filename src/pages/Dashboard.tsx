import React, { useContext, useEffect, useState } from 'react'

import { authContext } from '../contexts/Auth'
import verify from '../utils/Verify'
import Header from '../components/dashboard/Header'
import Table from '../components/dashboard/Table'
import { Badge, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { fetchPropertyByUserID } from '../utils/fetchAPI'

const Dashboard = (props: any) => {
	document.title = 'Dashboard | tuantanah'
	window.scrollTo(0, 0)
	const { setToken, setIsAuthenticated, user } = useContext(authContext)
	const { data, isLoading, updatedAt } = useQuery(
		['userProperty', user._id],
		fetchPropertyByUserID,
		{ enabled: user },
	)
	const [updated, setUpdated] = useState(new Date(updatedAt))

	useEffect(() => {
		verify.User()
	}, [])

	const onLogout = () => {
		setToken(null, false)
		setIsAuthenticated(false)
		props.history.push('/')
	}

	return (
		<>
			<Header />
			<h2>Welcome {user.email}</h2>
			<h3>Your role is {user.role == 1 ? 'admin' : 'user'}</h3>
			<Link to='/dashboard/property'>
				<button>Add property</button>
			</Link>
			<button onClick={onLogout}>Logout</button>
			<br />
			<Badge variant='secondary' as='span'>
				last update:{' '}
				{`${updated.getHours()}:${updated.getMinutes()}:${updated.getSeconds()}`}
			</Badge>
			{isLoading && <Spinner animation='border' />}
			{!isLoading && <Table property={data.property} />}
		</>
	)
}

export default Dashboard
