import React, {useState} from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/Logo.jpeg';
import { Container, Row } from 'reactstrap';
import { motion } from 'framer-motion';

const nav_link = [
  { display: 'HOME', path: 'Home' },
  { display: 'SERVICES', path: 'Services' },
  { display: 'CONTACT', path: 'Contact' },
];

const Header = () => {

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="navigation">
              <ul className="menu">
                {nav_link.map((item, index) =>(
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active': ''}>{item.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__buttons">
              <motion.button whileHover={{scale:1.1}} className="connection__button">Connexion</motion.button>
              <motion.button whileTap={{scale:1.2}}className="inscription__button">Inscription</motion.button>
            </div>
            <div className="nav__icons">
              <motion.span whileHover={{ scale : 1.2 }} className="user__icon">
                <i  className="ri-shield-user-line"></i> 
              </motion.span>
              <motion.div className="mobile__menu" whileTap={{ scale: 1.1 }}>
                <i className="ri-menu-line" onClick={toggleMobileMenu}></i> 
             </motion.div>
             {isMobileMenuOpen && (
                <div className="mobile__nav">
                <ul className="mobile__nav-menu">
                 {nav_link.map((item, index) => (
                  <li className="nav__item" key={index}>
                   <NavLink to={item.path} onClick={() => setMobileMenuOpen(false)}>
                    {item.display}
                   </NavLink>
                 </li>
              ))}
            </ul>
             </div>
            )}

            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
