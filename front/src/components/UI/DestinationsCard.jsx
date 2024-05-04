import React from 'react'
import '../../styles/destinationsCard.css'
import { Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const DestinationsCard = ({item}) => {
  return (
    <Col lg='3' md='4'> 
        <div className="destination__item">
        <div className="destination__img">
            <motion.img whileHover={{scale: 1.1}} src={item.imgUrl} alt="destination" />
        </div>
        <div className="destination__info p-2">
        <h3 className="destination__name text-center"><Link to={`/DestDetails/${item.id}`}>{item.destinationName}, {item.country}</Link></h3>
        </div>
        <div className="destination__description">
        <p> 
        Départ de Mai à Novembre 
        <br>
        </br>
        4 jours / 3 nuits
        <br>
        </br>
        transport inclus
        </p>
        </div>
        <div className="destination__price text-center p-2">
            <span>{item.price}€</span>
        </div>
    </div>
    </Col>
  )
}

export default DestinationsCard
