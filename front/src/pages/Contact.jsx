import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet';
import ContactPage from '../components/UI/ContactPage'

const Contact = () => {
    return (
    <Helmet title="Contact">
    <Container>
        <Row>
            <Col>
            <ContactPage />
            </Col>
        </Row>
    </Container>
    </Helmet>
    )
}

export default Contact
