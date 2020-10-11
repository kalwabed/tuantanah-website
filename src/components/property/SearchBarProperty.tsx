import React, { useContext } from 'react'
import {
	Form,
	Col,
	FormControl,
	Button,
	Badge,
	InputGroup,
} from 'react-bootstrap'
import { IoIosHeart, IoIosRepeat, IoIosSearch } from 'react-icons/io'
import cookies from 'js-cookie'

import { propertiesContext } from '../../contexts/Properties'
import logo from '../../img/logo.png'
import { fetchAllProperty } from '../../utils/fetchAPI'

const SearchBarProperty = () => {
	const { setProperties, setIsLoading } = useContext(propertiesContext)
	const searchOnSubmit = (e: React.FormEvent<HTMLInputElement>): void => {
		e.preventDefault()
	}

	const onUpdate = async () => {
		try {
			cookies.remove('exp_props')
			setIsLoading(true)
			setProperties(await fetchAllProperty())
			setIsLoading(false)
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<section className='section section-sm'>
			<Form onSubmit={searchOnSubmit}>
				<Form.Row>
					<Col xs={8} md={5}>
						<InputGroup>
							<FormControl placeholder='i.e Banyuwangi' />
							<InputGroup.Append>
								<Button variant='success'>
									Search <IoIosSearch />
								</Button>
							</InputGroup.Append>
						</InputGroup>
					</Col>
					<Col xs={2} md={3} className='mb-2'>
						<Button onClick={onUpdate} variant='dark'>
							Refresh <IoIosRepeat />
						</Button>
					</Col>
					<Col md='auto' className='d-sm-flex d-md-block justify-content-end'>
						<Button variant='outline-dark'>
							<Badge variant='light'>0</Badge> <IoIosHeart />
						</Button>
						<Badge variant='outline-light' className='mx-1'>
							41 items
						</Badge>
						<Badge variant='outline-light' className='mx-1'>
							13 cities
						</Badge>
						<Badge variant='outline-light' className='mx-1'>
							<img src={logo} alt='logo' width='20' height='20' />
						</Badge>
					</Col>
				</Form.Row>
			</Form>
		</section>
	)
}

export default SearchBarProperty
