import React, { useContext } from 'react'
import { Grid } from 'gridjs-react'
import { Container } from 'react-bootstrap'
import { propertiesContext } from '../../contexts/Properties'
import { html, h } from 'gridjs'

const Table = () => {
	const { propertyById } = useContext(propertiesContext)

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
					prop._id,
				])}
				columns={[
					{ name: '#', width: '1%' },
					{
						name: 'Img',
						formatter: cell => html(`<img src='${cell}' width='100%'/>`),
						width: '7%',
					},
					'Title',
					'Size',
					'Location',
					{
						name: 'Actions',
						formatter: (row, cell) => {
							return h(
								'button',
								{
									className: 'btn btn-danger btn-sm',
									onClick: () => alert(`Deleting ${row}`),
								},
								'Delete',
							)
						},
						width: '5%',
					},
				]}
				search={true}
				pagination={{ enabled: true, limit: 10 }}
			/>
		</Container>
	)
}

export default Table
