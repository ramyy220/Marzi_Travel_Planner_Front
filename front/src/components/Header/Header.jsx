import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/Logo.jpeg';
import { Container, Row } from 'reactstrap';

const Header = () => {
  return <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navigation">
            <ul className="menu">
              <li className="nav__item"> 
                <NavLink to="Home" exact>HOME</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="Services" exact>SERVICES</NavLink>
              </li>
              <li className="nav__item"> 
                <NavLink to="Contact" exact>CONTACT</NavLink>
              </li>
            </ul>
            </div>
        <div className="nav__icons">
          <span className="user__icon">
            <i className="ri-shield-user-line"></i> 
          </span>
          <div className="mobile__menu">
            <i className="ri-menu-line"></i> 
          </div>
        </div>
        </div>
        </Row>
      </Container>
    </header>
}

export default Header;
