import React from 'react'
import { Grid, _ } from 'gridjs-react'
import { Container, Button } from 'react-bootstrap'
import { html } from 'gridjs'
import { IoMdTrash, IoMdSearch, IoMdCreate } from 'react-icons/io'
import { Property } from '../../types/index.types'
import { useHistory } from 'react-router-dom'
import { fetchDeleteProperty } from '../../utils/fetchAPI'
import { toast } from 'react-toastify'
import { useQueryCache } from 'react-query'

const Table = ({ property }: { property: Property[] }) => {
	if (!property) return null
	const queryCache = useQueryCache()
	const history = useHistory()

	const onDelete = async (id: string) => {
		const result = await fetchDeleteProperty(id)
		if (!result.success) {
			toast.warning(result.msg)
		} else {
			toast.success('Properti berhasil dihapus')
			queryCache.invalidateQueries('userProperty')
		}
	}

	const onDetail = (id: string) => {
		history.push(`/dashboard/property/${id}`)
	}

	const onUpdate = (id: string) => {
		history.push(`/dashboard/property/up/${id}`)
	}

	return (
		<Container className='mb-3'>
			<Grid
				data={property.map((prop, i) => [
					i + 1,
					prop.mainPicture,
					prop.title,
					prop.size,
					prop.location.name,
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
