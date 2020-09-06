import React, { useContext } from 'react'
import { Grid, _ } from 'gridjs-react'
import { Container, Button, Badge } from 'react-bootstrap'
import { propertiesContext } from '../../contexts/Properties'
import { html } from 'gridjs'
import { IoMdTrash, IoMdSearch, IoMdCreate } from 'react-icons/io'

const Table = () => {
	const { propertyById } = useContext(propertiesContext)

	const onDelete = (id: string) => {
		alert(`deleting id ${id}`)
	}

	const onDetail = (id: string) => {
		alert(`detail id ${id}`)
	}

	const onUpdate = (id: string) => {
		alert(`update id ${id}`)
	}

	if (propertyById.length < 1) return null
	return (
		<Container>
			<Grid
				data={propertyById.map((prop, i) => [
					i + 1,
					prop.mainPicture,
					prop.title,
					prop.size,
					prop.location,
					_(
						<>
							<Badge
								variant={prop.status.negotiation ? 'success' : 'secondary'}
							>
								nego
							</Badge>
							<Badge
								variant={prop.status.shm ? 'success' : 'secondary'}
								className='ml-1'
							>
								shm
							</Badge>
						</>,
					),
					_(
						<>
							<Button
								className='mr-1'
								size='sm'
								variant='info'
								onClick={() => onDetail(prop._id)}
							>
								<IoMdSearch />
							</Button>
							<Button
								className='mx-1'
								size='sm'
								variant='warning'
								onClick={() => onUpdate(prop._id)}
							>
								<IoMdCreate />
							</Button>
							<Button
								className='ml-1'
								size='sm'
								variant='danger'
								onClick={() => onDelete(prop._id)}
							>
								<IoMdTrash />
							</Button>
						</>,
					),
				])}
				columns={[
					{ name: '#', width: '1%' },
					{
						name: 'Img',
						formatter: cell => html(`<img src='${cell}' width='100%'/>`),
						width: '7%',
					},
					'Title',
					{ name: 'Size', width: '3%' },
					'Location',
					{ name: 'Status', width: '7%' },
					'Actions',
				]}
				search={true}
				pagination={{ enabled: true, limit: 10 }}
			/>
		</Container>
	)
}

export default Table
