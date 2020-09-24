/* eslint-disable react/prop-types */
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import {
	AiOutlineFacebook,
	AiOutlineMail,
	AiOutlineWhatsApp,
} from 'react-icons/ai'
import StatusPropertyCheck from '../../../elements/StatusPropertyCheck'
import { Property } from '../../../types/index.types'

const Identity: React.FC<Property> = ({
	title,
	location,
	size,
	price,
	status,
	contact,
}) => {
	if (!status) return null
	return (
		<section className='mt-3'>
			<Row>
				<Col>
					<Card className='shadow-sm'>
						<Card.Body>
							<Row>
								<Col>
									<Card>
										<Card.Body>
											<h5>Judul : {title}</h5>
											<h5>Lokasi : {location.display}</h5>
											<h5>Ukuran : {size.display}</h5>
											<h5>Harga : {price} Juta</h5>

											<div className='h5'>
												<StatusPropertyCheck
													negotiation={status.negotiation}
													shm={status.shm}
												/>
											</div>
											<span className='text-muted'>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit. Quae placeat at iusto repellendus exercitationem
												nemo perspiciatis? Illo magni voluptate deserunt
												temporibus aperiam, cum iusto nihil fugiat pariatur,
												explicabo veniam perferendis.
											</span>
										</Card.Body>
									</Card>
								</Col>
								<Col>
									<Card>
										<Card.Body>
											{contact.length < 1 && (
												<h5 className='text-muted text-center'>
													Kontak belum ditambahkan
												</h5>
											)}
											{contact.length >= 1 && <h5>Kontak :</h5>}
											<ul className='link-footer'>
												{contact.map((c, i) => (
													<li key={i} className='mb-1'>
														{c.type === 1 ? (
															<>
																<AiOutlineWhatsApp size='1.4em' />{' '}
																<h6 className='h5 d-inline-block'>{c.name}</h6>
																<ul>
																	<li>
																		<a
																			className='text-reset'
																			href={`https://wa.me/${c.url}`}
																		>
																			{c.url}
																		</a>
																	</li>
																</ul>
															</>
														) : c.type === 2 ? (
															<>
																<AiOutlineFacebook size='1.4em' />{' '}
																<h6 className='h5 d-inline-block'>{c.name}</h6>
																<ul>
																	<li>
																		<a
																			className='text-reset'
																			href={`https://facebook.com/search/top?q=${c.url}`}
																		>
																			{c.url}
																		</a>
																	</li>
																</ul>
															</>
														) : c.type === 3 ? (
															<>
																<AiOutlineMail size='1.4em' />{' '}
																<h6 className='h5 d-inline-block'>{c.name}</h6>
																<ul>
																	<li>
																		<a
																			className='text-reset'
																			href={`mailto:${c.url}`}
																		>
																			{c.url}
																		</a>
																	</li>
																</ul>
															</>
														) : null}
													</li>
												))}
											</ul>
										</Card.Body>
									</Card>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</section>
	)
}

export default Identity
