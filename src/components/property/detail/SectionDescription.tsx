import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'

const SectionDescription = () => {
    return (
        <section className="section mt-3 mb-4">
            <Container>
                <Row>
                    <Col as="h2">
                        Description <span className="divider"></span>
                    </Col>
                </Row>
                <Card className="h-100 w-100">
                    <Card.Body className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin vel elit vitae odio egestas dapibus. Nunc placerat
                        nulla leo, sit amet ultrices nulla mattis vehicula.
                        Maecenas pharetra, ante sed tristique fringilla, tellus
                        neque tristique ligula, a sodales turpis ipsum pulvinar
                        dolor. Nulla congue, leo vel accumsan vulputate, ante
                        purus varius lacus, nec congue orci sem eu dui. Nam
                        risus ipsum, tempor et mauris nec, mollis congue sem.
                        Suspendisse imperdiet vitae purus nec consectetur. Donec
                        eget finibus dui. Integer in congue nibh. Maecenas
                        mollis ipsum quis urna porttitor, tempor gravida augue
                        sollicitudin. Ut tempor varius mauris quis faucibus. In
                        ut tristique nibh. Cras scelerisque et odio vitae
                        scelerisque. Fusce ut porttitor orci. Cras mi lectus,
                        euismod vel porta eget, sollicitudin at diam. Aenean
                        auctor nisl elit, sit amet ullamcorper odio iaculis id.
                    </Card.Body>
                </Card>
            </Container>
        </section>
    )
}

export default SectionDescription
