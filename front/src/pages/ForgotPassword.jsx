import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from '../apiNest/Api';  
import { useNavigate } from 'react-router-dom';  

import '../styles/login.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault();
        API.post('/auth/forgotPassword', { email })
            .then(response => {
                console.log('Forgot Password Request:', response.data);
                toast.success('Please check your email for password reset instructions.', {
                    icon: '✉️'
                });
                // Optional: Redirect to login or stay on the page
                navigate('/verifyotp');
            })
            .catch(error => {
                console.error('Forgot Password error:', error);
                toast.error('Failed to send reset email. Please try again.', {
                    icon: '❌'
                });
            });
    }

    return (
        <Helmet title="Forgot Password">
            <Container>
                <ToastContainer position="top-center" autoClose={5000} />
                <Row>
                    <Col lg='6' className='m-auto text-center'>
                        <h3 className='fw-bold mb-4'>Forgot Password</h3>
                        <Form className='auth__form' onSubmit={handleSubmit}>
                            <FormGroup className='auth__group'>
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder='Enter your email' value={email} onChange={e => setEmail(e.target.value)} />
                            </FormGroup>
                            <motion.button whileTap={{scale: 1.1}} type='submit' className="auth__btn">Send Reset Email</motion.button>
                            <p className='auth__text'>Remembered your password? <a href='/login'>Login</a></p>
                            <p className='auth__text'>Don't have an account? <a href='/signup'>Sign Up</a></p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Helmet>
    );
}

export default ForgotPassword;
