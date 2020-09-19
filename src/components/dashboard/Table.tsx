import React from 'react'
import { Grid, _ } from 'gridjs-react'
import { Container, Button } from 'react-bootstrap'
import { html } from 'gridjs'
import { IoMdTrash, IoMdSearch, IoMdCreate } from 'react-icons/io'
import { Property } from '../../types/index.types'
import { useHistory } from 'react-router-dom'

const Table = ({ property }: { property: Property[] }) => {
	if (!property) return null
	const history = useHistory()

	const onDelete = (id: string) => {
		alert(`deleting id ${id}`)
	}

	const onDetail = (id: string) => {
		history.push(`/dashboard/property/${id}`)
	}

	const onUpdate = (id: string) => {
		alert(`update id ${id}`)
	}

	return (
		<Container className='mb-3'>
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
						name: 'Gambar',
						formatter: cell => html(`<img src='${cell}' width='100%'/>`),
						width: '7%',
					},
					'Judul',
					{ name: 'Ukuran', width: '5%' },
					'Lokasi',
					'Aksi',
				]}
				search={true}
				pagination={{ enabled: true, limit: 10 }}
			/>
		</Container>
	)
}

export default Table
