/* eslint-disable react/prop-types */
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown/with-html'
import { Property } from '../../../types/index.types'

const Description: React.FC<Property> = ({ description }) => {
	return (
		<section className='mt-3'>
			<Row>
				<Col>
					<Card className='shadow-sm'>
						<Card.Body>
							<h5>Deskripsi :</h5>
							<Card>
								<Card.Body>
									<ReactMarkdown source={description} escapeHtml={false} />
								</Card.Body>
							</Card>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</section>
	)
}

export default Description
