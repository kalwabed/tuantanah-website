import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

import Header from '../../components/dashboard/Header'
import Gallery from '../../components/dashboard/Detail/Gallery'
import Identity from '../../components/dashboard/Detail/Identity'
import Description from '../../components/dashboard/Detail/Description'
import Footer from '../../components/Footer'
import { useQuery } from 'react-query'
import { fetchPropertyById } from '../../utils/fetchAPI'

const Detail = () => {
	const id = document.location.pathname.split('/')[3]
	const { data, isLoading } = useQuery(['propById', id], fetchPropertyById)

	return (
		<>
			<Header />
			<Container className='my-3'>
				{isLoading && <h5 className='text-center'>Loading...</h5>}
				{!isLoading && (
					<>
						<Row>
							<Col>
								<Card>
									<Card.Img
										className='img-gallery'
										src={data.property.mainPicture}
										height={400}
										width='100%'
									/>
								</Card>
							</Col>
						</Row>

						<Gallery {...data.property} />

						<Identity {...data.property} />

						<Description {...data.property} />
					</>
				)}
			</Container>
			{!isLoading && <Footer isDashboard={true} />}
		</>
	)
}

export default Detail
