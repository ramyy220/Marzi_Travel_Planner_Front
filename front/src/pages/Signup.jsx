import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from '../apiNest/Api';
import Logo from '../assets/images/Logo.jpeg'
import Auth from '../assets/images/authentification.png';

import '../styles/login.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const navigate = useNavigate();

    const isValidPassword = (password) => {
        const regex = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.{8,})/;
        return regex.test(password);
    };

    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;

        if (!isValidEmail(email)) {
            setEmailError(true);
            toast.error('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError(false);
        }

        if (!isValidPassword(password)) {
            setPasswordError(true);
            toast.error('Password must be at least 8 characters long, include a capital letter and a special character.');
            isValid = false;
        } else if (password !== passwordConf) {
            setPasswordError(true);
            toast.error('Passwords do not match.');
            isValid = false;
        } else {
            setPasswordError(false);
        }

        if (isValid) {
            API.post('/auth/signup', { username, email, password })
                .then(response => {
                    console.log('response:', response);
                    toast.success('Account created successfully!', { icon: '✅' });
                    setTimeout(() => {
                        navigate('/Login');
                    }, 3000);
                })
                .catch(error => {
                    console.error('error:', error);
                });
        }
    };

    return (
        <Helmet title="Signup">
            <Container>
                <ToastContainer position="top-center" autoClose={5000} />
                <Row>
                   <Col lg='6' className='imgb'>
                      <img src={Auth} alt="Description" />
                    </Col>
                    <Col lg='6' className='m-auto text-center'>
                        <h3 className='fw-bold mb-4'>SignUp</h3>
                        <Form className='auth__form' onSubmit={handleSubmit}>
                            <img src={Logo} alt='Logo' className='auth__logo' />
                            <FormGroup className='auth__group'>
                                <label>Username</label>
                                <input type="text" className="form-control" placeholder='Enter your username' value={username} onChange={e => setUsername(e.target.value)} />
                            </FormGroup>
                            <FormGroup className='auth__group'>
                                <label>Email</label>
                                <input type="email" className={`form-control ${emailError ? 'is-invalid' : ''}`} placeholder='Enter your email' value={email} onChange={e => setEmail(e.target.value)} />
                                {emailError && <div className="invalid-feedback">Please enter a valid email address.</div>}
                            </FormGroup>
                            <FormGroup className='auth__group'>
                                <label>Password</label>
                                <input type="password" className={`form-control ${passwordError ? 'is-invalid' : ''}`} placeholder='Enter your password' value={password} onChange={e => setPassword(e.target.value)} />
                                {passwordError && <div className="invalid-feedback">Password must be at least 8 characters long, include a capital letter and a special character.</div>}
                            </FormGroup>
                            <FormGroup className='auth__group'>
                                <label>Password confirmation</label>
                                <input type="password" className={`form-control ${passwordError ? 'is-invalid' : ''}`} placeholder='Enter your password again' value={passwordConf} onChange={e => setPasswordConf(e.target.value)} />
                                {passwordError && <div className="invalid-feedback">Passwords do not match.</div>}
                            </FormGroup>
                            <motion.button whileTap={{ scale: 1.1 }} type='submit' className="auth__btn"><Link to="/Login">Create an account</Link></motion.button>
                            <p className='auth__text'>Already have an account? <a href='/Login'>Login</a></p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Helmet>
    );
}

export default Signup;
