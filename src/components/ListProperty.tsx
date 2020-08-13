import React from 'react'
import CardProperty from '../parts/CardProperty'
import { Row } from 'react-bootstrap'

const ListProperty = () => {
    return (
        <>
            <Row>
                {Array(10)
                    .fill(1)
                    .map((el, i) => (
                        <CardProperty key={i} />
                    ))}
            </Row>
        </>
    )
}

export default ListProperty
