import React, { useContext, useEffect, useState } from 'react'
import { Badge, Button, Col, Container, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { IoIosAddCircle, IoIosCheckmarkCircle, IoIosLogOut } from 'react-icons/io'

import { authContext } from '../../contexts/Auth'
import verify from '../../utils/Verify'
import Header from '../../components/dashboard/Header'
import Table from '../../components/dashboard/Table'
import { fetchPropertyByUserID } from '../../utils/fetchAPI'

const Dashboard = (props: any) => {
	document.title = 'Dashboard | tuantanah'
	window.scrollTo(0, 0)
	const { setToken, setIsAuthenticated, user } = useContext(authContext)
	const { data, isLoading, updatedAt } = useQuery(['userProperty', user._id], fetchPropertyByUserID, {
		onSettled: (): void => setUpdated(new Date())
	})
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
			<Container className='my-3'>
				<Row>
					<Col xs={8} md={8}>
						<Link to='/dashboard/property'>
							<Button className='mr-2' variant='success' size='lg'>
								Tambah <IoIosAddCircle />
							</Button>
						</Link>
						<Button className='mr-2' variant='primary' size='lg'>
							Verifikasi <IoIosCheckmarkCircle />
						</Button>
					</Col>
					<Col xs={4} md={4} className='d-sm-flex d-md-block justify-content-end'>
						<span>Masuk sebagai </span>
						<span className='font-weight-bold mr-1'>{user.fullName}</span> |{' '}
						<Button variant='outline-secondary' size='sm' onClick={onLogout}>
							Keluar <IoIosLogOut />
						</Button>
						<Badge variant='light' as='span'>
							update terakhir: {`${updated.getHours()} : ${updated.getMinutes()} : ${updated.getSeconds()}`}
						</Badge>
					</Col>
				</Row>
				{isLoading && (
					<>
						Memuat <Spinner variant='success' animation='grow' />
					</>
				)}
			</Container>
			{!isLoading && <Table property={data.property} />}
		</>
	)
}

export default Dashboard
