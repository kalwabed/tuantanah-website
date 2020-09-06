import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<Navbar bg='dark' variant='dark' expand='md' className='nav-font'>
			<Container className='justify-content-center'>
				<Link to='/dashboard'>
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
			</Container>
		</Navbar>
	)
}

export default Header
