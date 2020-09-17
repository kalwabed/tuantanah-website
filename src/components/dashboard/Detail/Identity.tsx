import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import StatusPropertyCheck from '../../../elements/StatusPropertyCheck'

const Identity = () => {
	return (
		<section>
			<Row>
				<Col>
					<Card>
						<Card.Body>
							<Row>
								<Col>
									<Card>
										<Card.Body>
											<div>
												<h5>Judul : Kaliwa Residence</h5>
											</div>

											<div>
												<h5>Lokasi : Genteng</h5>
											</div>

											<div>
												<h5>Ukuran : 10x7 m</h5>
											</div>

											<div>
												<h5>Harga : 170 Juta</h5>
											</div>

											<div className='h5'>
												<StatusPropertyCheck negotiation={true} shm={false} />
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
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Quidem harum illo, perspiciatis, quisquam veniam nemo
												qui fugit et atque earum animi quos distinctio quasi rem
												error. Omnis delectus voluptas animi.
											</p>
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
