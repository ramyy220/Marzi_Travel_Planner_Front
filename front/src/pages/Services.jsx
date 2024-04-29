import React from 'react'
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import DestinationsList from '../components/UI/DestinationsList';
import data from '../assets/data/Destinations';


const Services = () => {

    return <Helmet title='Services'>
    <Container>
        <Row>
          <Col lg='12'>
            <h1 className='destinations'>Toutes Nos Destinations à travers le monde</h1>
          </Col>
          <DestinationsList data={data} />
        </Row>
      </Container>
    </Helmet>
    
}

export default Services
