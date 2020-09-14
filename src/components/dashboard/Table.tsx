import React from 'react'
import { Grid, _ } from 'gridjs-react'
import { Container, Button } from 'react-bootstrap'
import { html } from 'gridjs'
import { IoMdTrash, IoMdSearch, IoMdCreate } from 'react-icons/io'
import { Property } from '../../types/index.types'

const Table = ({ property }: { property: Property[] }) => {
	if (!property) return null
	const onDelete = (id: string) => {
		alert(`deleting id ${id}`)
	}

	const onDetail = (id: string) => {
		alert(`detail id ${id}`)
	}

	const onUpdate = (id: string) => {
		alert(`update id ${id}`)
	}

	return (
		<Container>
			<Grid
				data={property.map((prop, i) => [
					i + 1,
					prop.mainPicture,
					prop.title,
					prop.size,
					prop.location,
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
					'Actions',
				]}
				search={true}
				pagination={{ enabled: true, limit: 10 }}
			/>
		</Container>
	)
}

export default Table
