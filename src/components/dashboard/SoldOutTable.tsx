import React from 'react'
import { Grid } from 'gridjs-react'
import { Property } from '../../types/index.types'

const SoldOutTable = ({ property }: { property: Property[] }) => {
	const properties = property.filter(prop => prop.status.soldOut)

	return (
		<Grid
			data={properties.map((prop, i) => [i + 1, prop.title, prop.size.display, prop.location.display])}
			columns={[{ name: '#', width: '1%' }, 'Judul', { name: 'Ukuran', width: '5%' }, 'Lokasi']}
			pagination={{ enabled: true, limit: 5 }}
		/>
	)
}

export default SoldOutTable
