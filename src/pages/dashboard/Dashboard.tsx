import React, { useContext, useEffect, useState } from 'react'
import { Badge, Button, Col, Container, Modal, Row, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { IoIosAddCircle, IoIosCheckmarkCircle, IoIosJournal, IoIosLogOut } from 'react-icons/io'

import { authContext } from '../../contexts/Auth'
import verify from '../../utils/Verify'
import Header from '../../components/dashboard/Header'
import Table from '../../components/dashboard/Table'
import { fetchPropertyByUserID } from '../../utils/fetchAPI'
import SoldOutTable from '../../components/dashboard/SoldOutTable'

const Dashboard = (props: any) => {
	document.title = 'Dashboard'
	window.scrollTo(0, 0)
	const { setToken, setIsAuthenticated, user } = useContext(authContext)
	const { data, isLoading, updatedAt } = useQuery(['userProperty', user._id], fetchPropertyByUserID, {
		onSettled: (): void => setUpdated(new Date())
	})
	const [updated, setUpdated] = useState(new Date(updatedAt))
	const [showModal, setShowModal] = useState(false)

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
				{/* Modal */}
				<Modal show={showModal} size='lg' scrollable backdrop='static'>
					<Modal.Header closeButton onHide={() => setShowModal(false)}>
						<p className='h6'>
							Daftar properti <b>{user.fullName}</b> yang telah terjual
						</p>
					</Modal.Header>
					<Modal.Body>{!isLoading && <SoldOutTable property={data.property} />}</Modal.Body>
					<Modal.Footer>
						<div className='d-flex justify-content'>
							<button className='btn btn-secondary' onClick={() => setShowModal(false)}>
								Kembali
							</button>
						</div>
					</Modal.Footer>
				</Modal>
				{/* end modal */}

				<Row>
					<Col xs={8} md={8}>
						<Link to='/dashboard/property'>
							<Button className='mr-2' variant='success' size='lg'>
								Tambah <IoIosAddCircle />
							</Button>
						</Link>
						<Link to='/dashboard/verification'>
							<Button className='mr-2' variant='primary' size='lg'>
								Verifikasi <IoIosCheckmarkCircle />
							</Button>
						</Link>
						<Button className='mr-2' variant='info' size='lg' onClick={() => setShowModal(true)}>
							Terjual <IoIosJournal />
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
