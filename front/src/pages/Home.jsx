import React from 'react';
import { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image from '../assets/images/image.png';
import image1 from '../assets/images/croisiere.png';
import image2 from '../assets/images/safaris.png';
import image3 from '../assets/images/nature.png';
import image4 from '../assets/images/patrimoinee.jpg';
import image5 from '../assets/images/randonee.jpg';


import DestinationsList from '../components/UI/DestinationsList';

import '../styles/home.css';
import destinations from '../assets/data/Destinations';

const images = [
  { src: image1, title: 'Croisière' },
  { src: image2, title: 'Safaris' },
  { src: image3, title: 'Nature' },
  { src: image4, title: 'Patrimoine' },
  { src: image5, title: 'Randonnée' },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Home = () => {
  const [data, setData] = useState(destinations);

  useEffect(() => { 
    const filteredData = destinations.filter(item =>   item.continent === 'Africa' );
    setData(filteredData);
  },[]);


  return (
    <Helmet title='Home'>
      <div className="home">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="content">
                <p className="subtitle">MTP Destinations sur-mesure</p>
                <h2>Vous rêvez de nouvelles aventures ?</h2>
                <p>Bienvenue sur "MARZI TP", votre partenaire ultime pour des voyages inoubliables et sur mesure ! Explorez le monde en toute simplicité, avec un compagnon qui planifie, personnalise et optimise chaque étape de votre aventure.</p>
                <motion.button whileTap={{ scale: 1.2 }} className='bouton1' onClick={() => window.location.href = '/questions'}>Commencer l'aventure </motion.button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="image">
                <img src={image} alt="home" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="adjuste">
        <Row>
          <Col lg='12'>
            <h1 className='envie_title'>Le monde selon vos envies</h1>
          </Col>
        </Row>
      </Container>
      <div className="envies">
        <Container className="adjuste">
          <Row>
            <Col lg='12'>
              <Carousel responsive={responsive}>
                {images.map((img, index) => (
                  <div key={index} className="carousel-item">
                    <img src={img.src} alt={`carousel ${index}`} />
                    <div className="carousel-item-title">{img.title}</div>
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col lg='12'>
            <h1 className='destinations'>Nos destinations à travers le monde</h1>
          </Col>
          <DestinationsList data={data} />
        </Row>
      </Container>


      <Row>
          <Col lg='12'>
            <h1 className='features'>Nos fonctionnalitées</h1>
          </Col>
        </Row>
      <div className="features-section">
      <Container>
        <Row>
          <Col lg='6' md='6' sm='12' className="mb-3">
            <div className="feature-item">
              <motion.span whileHover={{ scale: 1.2 }} className="icon">
                <i className="ri-user-smile-line"></i>
              </motion.span>
              <h5>Profil Personnalisé</h5>
              <p>Créez votre profil unique et laissez "En recherche" vous guider vers des destinations et des expériences qui correspondent à votre style.</p>
            </div>
          </Col>
          <Col lg='6' md='6' sm='12' className="mb-3">
            <div className="feature-item">
              <motion.span whileHover={{ scale: 1.2 }} className="icon">
                <i className="ri-flight-takeoff-line"></i>
              </motion.span>
              <h5>Réservations Facilitées</h5>
              <p>Réservez vols, hébergements et activités directement depuis l'application, en quelques clics.</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg='6' md='6' sm='12' className="mb-3">
            <div className="feature-item">
              <motion.span whileHover={{ scale: 1.2 }} className="icon">
                <i className="ri-map-pin-line"></i>
              </motion.span>
              <h5>Planification Intelligente</h5>
              <p>Notre algorithme intelligent crée des itinéraires optimisés, des vols abordables et des hébergements parfaits pour vous.</p>
            </div>
          </Col>
          <Col lg='6' md='6' sm='12' className="mb-3">
            <div className="feature-item">
              <motion.span whileHover={{ scale: 1.2 }} className="icon">
                <i className="ri-hand-coin-line"></i>
              </motion.span>
              <h5>Suivi Des Dépenses</h5>
              <p>Gérez votre budget avec précision grâce à notre outil de suivi des dépenses intégré.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </Helmet>
  );
}

export default Home;