/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import { IoIosHeartEmpty } from 'react-icons/io'
import { Link } from 'react-router-dom'

import { Property } from '../types/index.types'
import StatusPropertyCheck from '../elements/StatusPropertyCheck'
import { propertiesContext } from '../contexts/Properties'

const CardProperty: React.FC<Property> = ({
	title,
	mainPicture,
	location,
	size,
	_id,
	status,
}) => {
	const { getOneProperty } = useContext(propertiesContext)

	return (
		<Col md={3} xs={6} className='mb-3'>
			<Card>
				<Card.Img variant='top' src={mainPicture} width='10%' />
				<Card.Body className='pt-2 font-card'>
					<div className='d-md-flex justify-content-between'>
						<Card.Title>{size}</Card.Title>
						<div>
							<StatusPropertyCheck
								nego={status.negotiation}
								shm={status.shm}
							/>
						</div>
					</div>
					<Card.Text className='font-weight-bold'>{title}</Card.Text>
					<Card.Text className='mt-2 font-small'>
						{location}
					</Card.Text>
					<div className='justify-content-between d-flex'>
						<Link
							to={`/property/${_id}`}
							onClick={() => getOneProperty(_id)}
						>
							<Button size='sm' variant='success'>
								Detail
							</Button>
						</Link>
						<Button
							className='ml-1'
							variant='outline-dark'
							size='sm'
						>
							<IoIosHeartEmpty />
						</Button>
					</div>
				</Card.Body>
			</Card>
		</Col>
	)
}

export default CardProperty
