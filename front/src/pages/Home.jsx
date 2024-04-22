import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion';
import image from '../assets/images/image.png'
import '../styles/home.css'

const Home = () => {
  return <Helmet title='Home'>
    <div className="home">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="content">
              <p className="subtitle">MTP Destinations sur-mesure</p>
              <h2>Vous rêvez de nouvelles aventures ?</h2>
              <p>Bienvenue sur "MARZI TP", votre partenaire ultime pour des voyages inoubliables et sur mesure ! Explorez le monde en toute simplicité, avec un compagnon qui planifie, personnalise et optimise chaque étape de votre aventure.</p>
              
              <motion.button whileTap={{scale : 1.2}} className='bouton1' onClick={() => window.location.href='/services'}>Commencer l'aventure </motion.button>
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

    <div className="envies">
      <Container>
        <Row>
          <Col lg='12'>
            <h1 className='envie_title'>Le monde selon vos envies</h1>
            
          </Col>
        </Row>
      </Container>
    </div>
     </Helmet>

}

export default Home
