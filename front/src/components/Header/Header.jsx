import React, { useState, useEffect } from 'react';
import './header.css';
import { Link, NavLink } from 'react-router-dom';
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);



  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };
  
    checkLoginStatus();
  
    const intervalId = setInterval(checkLoginStatus, 3000);
  
    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href = '/login'; 
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
                {nav_link.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__active' : ''}>{item.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__buttons">
  {!isLoggedIn ? (
    <>
      <Link to='/login'>
        <motion.button whileHover={{ scale: 1.1 }} className="connection__button">Login</motion.button>
      </Link>
      <Link to='/signup'>
        <motion.button whileTap={{ scale: 1.2 }} className="inscription__button">SignUp</motion.button>
      </Link>
    </>
  ) : (
    <>
      <motion.button whileTap={{ scale: 1.1 }} className="user__button" onClick={toggleUserMenu} style={{ position: 'relative' }}>
  <i className="ri-user-line"></i>
  {showUserMenu && (
    <motion.div className="user__menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <ul className={`user__menu-list ${showUserMenu ? 'show' : ''}`}>
        <li className="user__menu-item">
          <Link to='/profile'>Profile</Link>
        </li>
        <li className="user__menu-item">
          <button className='btn_btn' onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </motion.div>
  )}
</motion.button>
    </>
  )}
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
