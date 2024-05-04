import React from 'react';
import './footer.css';
import footer from '../../assets/images/footer.png';
import { motion } from 'framer-motion';

const year = new Date().getFullYear();
const Footer = () => {
  return (
    <div className="footer">
      <img  src={footer} alt="footer" />
      <h2>Créez Votre Voyage Personnalisé dès Aujourd'hui </h2>
      <p><strong>Vous rêvez de nouvelles aventures ?</strong> <br></br><br></br>Laissez "MTP" être votre guide. Créez votre compte dès maintenant pour commencer à explorer des destinations extraordinaires, à rencontrer des voyageurs inspirants et à façonner le voyage de vos rêves. <br></br> <br></br> <strong>Découvrez le Monde avec Nous !</strong> </p>
      <motion.button whileHover={{scale : 1.1}}><a href='/signup'>Créer votre compte</a></motion.button>
      <p className='copy'><strong>© Copyright {year} MTP.</strong></p>
    </div>
    
  );
}

export default Footer;

