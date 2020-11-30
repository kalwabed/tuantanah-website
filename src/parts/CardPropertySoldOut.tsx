/* eslint-disable react/prop-types */
import React from 'react'
import { Card, Button } from 'react-bootstrap'

import { Property } from '../types/index.types'
import StatusPropertyCheck from '../elements/StatusPropertyCheck'

const CardProperty: React.FC<Property> = ({ title, mainPicture, location, size, status }) => {
  return (
    <Card className="hover-shadow">
      <Card.Img variant="top" src={mainPicture} style={{ filter: 'grayscale()' }} width="10%" />
      <Card.Body className="pt-2 font-card">
        <div className="d-md-flex justify-content-between">
          <Card.Title>{size.display}</Card.Title>
          <div>
            <StatusPropertyCheck {...status} />
          </div>
        </div>
        <Card.Text className="font-weight-bold">{title}</Card.Text>
        <Card.Text className="mt-2 font-small">{location.display}</Card.Text>
        <div className="justify-content-center d-flex">
          <Button size="sm" variant="secondary" disabled>
            Sudah terjual!
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CardProperty
