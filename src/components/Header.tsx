/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Button, Nav } from 'react-bootstrap'
import logo from '../img/logo.png'
import { IoIosLogIn } from 'react-icons/io'

const Header = ({ navlink = '' }) => {
	return (
		<Navbar
			bg='dark'
			variant='dark'
			expand='md'
			sticky='top'
			className='nav-font'
		>
			<Container>
				<Link to='/'>
					<Navbar.Brand>
						<img
							src={logo}
							alt='logo'
							className='d-inline-block'
							width='22'
							height='22'
						/>
						<span style={{ marginLeft: '2px' }} className='logo-font'>
							tuantanah
						</span>
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle />
				<Navbar.Collapse className='justify-content-end'>
					<Nav>
						<Nav.Item>
							<Link
								to='/'
								className={`nav-link mr-auto ${
									navlink === '/' ? 'active' : null
								}`}
							>
								Home
							</Link>
						</Nav.Item>
						<Link
							to='/property'
							className={`nav-link mr-auto ${
								navlink === 'property' ? 'active' : null
							}`}
						>
							Property
						</Link>
						<Link
							to='/faq'
							className={`nav-link mr-3 ${navlink === 'faq' ? 'active' : null}`}
						>
							Faq
						</Link>
					</Nav>
					<Link to='/signin'>
						<Button size='sm' className='ml-2' variant='outline-success'>
							masuk sebagai penjual <IoIosLogIn />
						</Button>
					</Link>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Header
