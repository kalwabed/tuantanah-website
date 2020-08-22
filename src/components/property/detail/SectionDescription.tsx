import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'

const SectionDescription = () => {
    return (
        <section className="section mt-3 mb-4">
            <Container>
                <Row>
                    <Col>
                        <h2>Deskripsi</h2>
                    </Col>
                </Row>
                <Card style={{ width: '100%', height: '23rem' }}>
                    <Card.Body>
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
                        Curabitur a elementum erat, id facilisis libero. Fusce
                        sodales est felis. Proin ut sollicitudin libero. Nullam
                        facilisis nisl eu diam viverra, non rutrum justo
                        blandit. Integer commodo massa ac turpis sollicitudin
                        vehicula. Etiam sem nisl, elementum quis nibh vel,
                        consequat facilisis odio. In porttitor nisi non dui
                        bibendum fringilla. Etiam semper erat eu velit suscipit
                        suscipit. Vestibulum vel porta neque. Vestibulum
                        convallis velit vitae ante fringilla euismod. Nunc
                        elementum ex sapien. Proin vitae ultricies nunc. Duis
                        placerat arcu et commodo facilisis. Aenean id elit
                        ornare, consequat tortor eu, sodales urna. Phasellus
                        congue augue sed tortor tincidunt, et imperdiet massa
                        tincidunt. Mauris volutpat tincidunt lacus, non cursus
                        dui dignissim eget. Vivamus dignissim bibendum nisl,
                        consequat euismod metus porttitor sed.
                    </Card.Body>
                </Card>
            </Container>
        </section>
    )
}

export default SectionDescription
