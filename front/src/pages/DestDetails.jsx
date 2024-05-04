import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import destinations from '../assets/data/Destinations';
import Helmet from '../components/Helmet/Helmet';
import { motion } from 'framer-motion';
import '../styles/destDetails.css';

const DestDetails = () => {
    const { id } = useParams();
    const item = destinations.find(destination => destination.id === id);

    if (!item) {
        return <div>Loading...</div>; 
    }

    const { destinationName, imgUrl, description, country, continent, price, adventureType } = item;

    return (
        <Helmet title={destinationName}>
            <div className="destDetails">
                <Container>
                    <Row>
                        <Col lg="6">
                            <motion.img whileHover={{scale: 1.1}} src={imgUrl} alt={destinationName} className="img-fluid" />
                        </Col>
                        <Col lg="6">
                            <h2>{destinationName}, {country}</h2>
                            <p>{description}</p>
                            <p>Country: {country}</p>
                            <p>Continent: {continent}</p>
                            <p>Price: {price}€</p>
                            <p>Adventure Type: {adventureType}</p>
                            <p>Departure from May to November</p>
                            <p>4 days / 3 nights</p>
                            <p>Transport included</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Helmet>
    );
};

export default DestDetails;
