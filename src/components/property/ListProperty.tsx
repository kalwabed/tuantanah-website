import React, { useContext } from 'react'
import LazyLoad from 'react-lazyload'
import { Fade } from 'react-awesome-reveal'

import CommonCardProperty from '../../parts/CardProperty'
import { Spinner, Row } from 'react-bootstrap'
import { propertiesContext } from '../../contexts/Properties'
import CardProperty from '../../parts/CardPropertySoldOut'

const ListProperty = () => {
  const { properties } = useContext(propertiesContext)
  return (
    <>
      <Row>
        <Fade className="col-6 col-md-3 mb-3" triggerOnce cascade duration={800}>
          {properties.map((el, i) => (
            <LazyLoad once height={30} key={i} placeholder={<Spinner animation="border" />}>
              {el.status.soldOut && <CardProperty {...el} />}
              {!el.status.soldOut && <CommonCardProperty {...el} />}
            </LazyLoad>
          ))}
        </Fade>
      </Row>
    </>
  )
}

export default ListProperty
