import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from '../apiNest/Api';  
import { useNavigate } from 'react-router-dom';  
import Logo from '../assets/images/Logo.jpeg'
import Auth from '../assets/images/authentification.png';

import '../styles/login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        // recuperer depuis le local storage si l'utilisateur a dejaa fait un parcours
        const recommandations = localStorage.getItem('recommandations'); 
        let url = '/result';
        //si oui nous le redirigeons vers le questionnaire
        if(!recommandations ){
            url = '/home';
        }
        //sinon nous le redirigeons vers la page d'accueil
        
        event.preventDefault();
        API.post('/auth/signin', { email, password })
    .then(response => {
        console.log('Login:', response.data);
        toast.success('Login successful!', {
            icon: '✅',
            onClose: () => navigate(url) 
        });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userInfo', JSON.stringify(response.data.user));
    })
    
    
    .catch(error => {
        console.error('Login error:', error);
        toast.error('Invalid credentials. Please check your email and password.', {
            icon: '❌'
        });
    });
    }

    return (
        <Helmet title="Login">
            <Container>
                <ToastContainer position="top-center" autoClose={5000} />
                <Row>
                    <Col lg='6'>
                      <img src={Auth} alt="Description" />
                    </Col>
                    <Col lg='6' className='m-auto text-center'>
                        <h3 className='fw-bold mb-4'>Login</h3>
                        <Form className='auth__form' onSubmit={handleSubmit}>
                            <img src={Logo} alt='Logo' className='auth__logo' />
                            <FormGroup className='auth__group'>
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder='Enter your email' value={email} onChange={e => setEmail(e.target.value)} />
                            </FormGroup>
                            <FormGroup className='auth__group'>
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder='Enter your password' value={password} onChange={e => setPassword(e.target.value)} />
                            </FormGroup>
                            <motion.button whileTap={{scale: 1.1}} type='submit' className="auth__btn">Login</motion.button>
                            <p className='auth__text'>Don't have an account? <a href='/signup'>Sign Up</a></p>
                            <p className='auth__text'>Forgot your password? <a href='/ForgotPassword'>Reset</a></p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Helmet>
    );
}

export default Login;
